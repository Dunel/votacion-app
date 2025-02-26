import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, Alert, ScrollView } from "react-native";
import { useForm } from "react-hook-form";
import CustomInput from "../components/customInput";
import CustomSelect from "../components/customSelect";
import CustomButton from "../components/customButton";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { useNavigation } from "@react-navigation/native";
import CustomInputNat from "../components/customInputNat";
import { useErrorHandling } from "../hooks/useErrorHandling";

const passwordRegex =
  /^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%&*./=\\])[A-Za-z\d@#$%&*./=\\]{8,}$/;
const cedulaRegex = /^[0-9]+$/;

const RegisterVoterScreen = () => {
  const { handleError } = useErrorHandling();
  const { userInfo } = useContext(AuthContext);
  const navigation = useNavigation();
  const { handleSubmit, control, watch } = useForm();
  const pwd = watch("password");
  const [date, setDate] = useState(new Date(""));
  const [estados, setEstados] = useState([]);
  const [municipios, setMunicipios] = useState([]);
  const [parroquias, setParroquias] = useState([]);

  const isValidDate = (day, month, year) => {
    const date = new Date(year, month - 1, day);
    return (
      date.getFullYear() === parseInt(year, 10) &&
      date.getMonth() + 1 === parseInt(month, 10) &&
      date.getDate() === parseInt(day, 10)
    );
  };

  const dateValidator = (value) => {
    const dateFormatRegex = /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

    if (!value.match(dateFormatRegex)) {
      return "Ingrese una fecha válida en el formato DD/MM/YYYY";
    }

    const [day, month, year] = value.split("/");

    if (!isValidDate(day, month, year)) {
      return "La Fecha de Nacimiento que intenta registrar NO existe";
    }

    // Calcular la fecha mínima para tener al menos 15 años
    const minDate = new Date();
    minDate.setFullYear(minDate.getFullYear() - 15);

    // Calcular la fecha máxima para no superar los 110 años
    const maxDate = new Date();
    maxDate.setFullYear(maxDate.getFullYear() - 110);

    const selectedDate = new Date(`${year}-${month}-${day}T00:00:00`);

    if (selectedDate > minDate) {
      return "El votante debe tener al menos 15 años para ser registrado";
    }

    if (selectedDate < maxDate) {
      return "La edad máxima permitida para registrarse es de 110 años";
    }

    setDate(selectedDate); // Asegúrate de definir la función setDate fuera del alcance de dateValidator o pasa la función como argumento
    return true;
  };

  const fetchEstados = async () => {
    try {
      const res = await axios.get(
        `https://node.appcorezulia.lat/api/venezuela/estados`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );
      //console.log(res.data);
      setEstados(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleMunicipios = async (estado) => {
    try {
      if (estado == "") {
        setParroquias([]);
        setMunicipios([]);
        return;
      }

      const res = await axios.get(
        `https://node.appcorezulia.lat/api/venezuela/estados/${estado}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );
      setParroquias([]);
      setMunicipios(res.data);
      return;
    } catch (error) {
      console.log(error);
    }
  };

  const handleParroquias = async (municipio) => {
    try {
      const res = await axios.get(
        `https://node.appcorezulia.lat/api/venezuela/municipio/${municipio}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );
      //console.log(res.data);
      //setParroquias([])
      setParroquias(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async (data) => {
    try {
      const user = {
        ...data,
        birthdate: date,
      };

      const res = await axios.post(
        `https://node.appcorezulia.lat/api/user/`,
        user,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );

      Alert.alert("VOTANTE REGISTRADO.", "", [{ text: "OK" }]);
      navigation.goBack();
    } catch (error) {
      handleError("ERROR AL REGISTRAR VOTANTE", error);
    }
  };

  useEffect(() => {
    fetchEstados();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <CustomSelect
          name="nacionalidad"
          control={control}
          rules={{ required: "Este campo es requerido" }}
          items={[
            { label: "Venezolano (V)", value: "V" },
            { label: "Extranjero (E)", value: "E" },
          ]}
          placeholder="Seleccione su Nacionalidad"
        />
        <CustomInput
          name="cedula"
          control={control}
          placeholder={"Cédula de Identidad"}
          rules={{
            required: "La cedula es requerida.",
            pattern: {
              value: cedulaRegex,
              message: "Solo se admiten números en este campo.",
            },
            min: {
              value: 100000,
              message:
                "La Cédula de Identidad que intenta registrar NO es válida.",
            },
            max: {
              value: 99999999,
              message:
                "La Cédula de Identidad que intenta registrar NO es válida.",
            },
          }}
        />
        <CustomInput
          name="fullname"
          control={control}
          placeholder={"Nombre Completo"}
          rules={{
            required: "El nombre completo es requerido",
            minLength: {
              value: 5,
              message: "El nombre debe tener maximo 50 caracteres.",
            },
            maxLength: {
              value: 50,
              message: "El nombre debe tener maximo 50 caracteres.",
            },
          }}
        />
        <CustomInputNat
          name="birthdate"
          control={control}
          placeholder={"Fecha de nacimiento (DD/MM/YYYY)"}
          rules={{
            required: "La fecha de nacimiento es requerida",
            pattern: {
              value: /^[0-9/]*$/,
              message: "Ingrese una fecha válida en el formato DD/MM/YYYY",
            },
            validate: dateValidator,
          }}
          onChangeText={dateValidator}
        />
        <CustomSelect
          control={control}
          name="estadoId"
          rules={{ required: "Este campo es requerido." }}
          items={estados.map((e) => ({
            label: e.estado,
            value: e.id,
          }))}
          placeholder="Estado de Residencia"
          onStateChange={handleMunicipios}
        />
        <CustomSelect
          control={control}
          name="municipioId"
          rules={{ required: "Este campo es requerido." }}
          items={municipios.map((e) => ({
            label: e.municipio,
            value: e.id,
          }))}
          placeholder="Municipio de Residencia"
          onStateChange={handleParroquias}
        />
        <CustomSelect
          control={control}
          name="parroquiaId"
          rules={{ required: "Este campo es requerido." }}
          items={parroquias.map((e) => ({
            label: e.parroquia,
            value: e.id,
          }))}
          placeholder="Parroquia de Residencia"
        />
        <CustomInput
          name="password"
          control={control}
          placeholder={"Contraseña"}
          secureTextEntry
          rules={{
            required: "La contraseña es requerida.",
            minLength: {
              value: 7,
              message: "La contraseña debe tener almenos 8 caracteres.",
            },
            maxLength: {
              value: 32,
              message: "La contraseña debe tener maximo 32 caracteres.",
            },
            pattern: {
              value: passwordRegex,
              message:
                "La contraseña debe tener al menos 8 caracteres e incluir al menos una letra mayúscula, un dígito y un carácter especial entre los siguientes: @, #, $, %, &, *, ., /, =",
            },
          }}
        />
        <CustomInput
          name="password2"
          control={control}
          placeholder={"Confirmar contraseña"}
          secureTextEntry
          rules={{
            validate: (value) => value === pwd || "Password do not match",
          }}
        />
        <CustomSelect
          control={control}
          name="question"
          rules={{ required: "Este campo es requerido." }}
          items={[
            { label: "¿Cuál es tu comida favorita?", value: "question1" },
            { label: "¿Cuál es tu bebida favorita?", value: "question2" },
            {
              label: "¿Cuál es tu género musical favorito?",
              value: "question3",
            },
          ]}
          placeholder="Pregunta secreta"
        />
        <CustomInput
          name="answer"
          control={control}
          placeholder={"Respuesta secreta"}
          rules={{
            required: "La respuesta es requerida.",
            minLength: {
              value: 4,
              message: "La respuesta debe tener al menos 4 caracteres.",
            },
            maxLength: {
              value: 50,
              message: "La respuesta debe tener máximo 50 caracteres.",
            },
          }}
        />
        <CustomButton
          text="REGISTRAR VOTANTE"
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 40,
  },
  errorContainer: {
    backgroundColor: "#f8d7da",
    borderColor: "#f5c6cb",
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    marginBottom: 20,
  },
  errorText: {
    color: "#721c24",
  },
});

export default RegisterVoterScreen;
