import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';

const ManualUsuarioScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>MANUAL DE USUARIO VOTEX</Text>
      <Image
        style={styles.logo}
        source={require("../../assets/playstore.png")}
      />

      <Text style={styles.sectionTitle}>REGISTRO PREVIO DE USUARIO</Text>
      <Text style={styles.paragraph}>
        Lo primero que debemos hacer es ubicar a un jefe de control para el registro de nuestros datos. Recuerda asistir personalmente con tu cédula laminada para la comprobación de datos y posteriormente descargar la aplicación con el archivo que nos otorgue el jefe de control. Este paso es crucial para garantizar que nuestros datos sean registrados de manera segura y correcta, evitando cualquier tipo de error que pueda afectar el acceso a nuestro usuario personal.
      </Text>

      <Text style={styles.sectionTitle}>INGRESO A LA APLICACIÓN</Text>
      <Text style={styles.paragraph}>
        Al abrir la aplicación móvil, encontrarás los campos necesarios para ingresar tus datos: selección de nacionalidad, cédula de identidad, contraseña, botón de iniciar sesión y una opción para recuperar contraseña. Estos campos son esenciales para asegurar que solo tú puedas acceder a tu cuenta, protegiendo tu información personal.
      </Text>
      <Text style={styles.paragraph}>
        Solo puedes acceder a tu cuenta con tu cédula de identidad y tu contraseña personal. Es importante manejar estos datos con prudencia y evitar compartirlos con terceros para mantener la seguridad de tu cuenta. Si los datos ingresados son correctos, accederás al inicio de tu usuario. En caso contrario, la aplicación marcará un error indicando que los datos no coinciden.
      </Text>
      <Text style={styles.paragraph}>
        Si olvidas tu contraseña o si esta se encuentra vencida, debes entrar en la opción de recuperar contraseña. Esta funcionalidad es vital para asegurar que puedas recuperar el acceso a tu cuenta sin problemas.
      </Text>

      <Text style={styles.sectionTitle}>RECUPERAR CONTRASEÑA</Text>
      <Text style={styles.paragraph}>
        En la opción de recuperar contraseña, deberás ingresar los siguientes datos: selección de nacionalidad, cédula de identidad, pregunta secreta y respuesta secreta. Si los datos son correctos, avanzarás a la pantalla donde podrás ingresar y confirmar una nueva contraseña. Este proceso garantiza que solo tú puedas cambiar tu contraseña, manteniendo la seguridad de tu cuenta.
      </Text>
      <Text style={styles.paragraph}>
        Finalmente, presiona "recuperar contraseña" para finalizar el proceso. Si no recuerdas esta información, ponte en contacto con un jefe de control para solventar la situación. Recuerda asistir personalmente con tu cédula laminada para la comprobación de datos y asegurar que la recuperación de tu contraseña se realice de manera segura.
      </Text>

      <Text style={styles.sectionTitle}>PANTALLA DE INICIO</Text>
      <Text style={styles.paragraph}>
        En la pantalla de inicio, se muestra tu cédula de identidad, nombre completo y las distintas elecciones disponibles. Cada elección tiene su título, descripción, fecha de inicio y culminación. Además, encontrarás botones para "ir a la votación" o "ver resultados", según corresponda. En la parte inferior, hay botones adicionales para acceder a la administración y para finalizar la sesión.
      </Text>

      <Text style={styles.sectionTitle}>PARTICIPACIÓN EN ELECCIONES</Text>
      <Text style={styles.paragraph}>
        Para votar en una elección dentro del tiempo estipulado, utiliza el botón "ir a la votación". Al hacerlo, se iniciará un contador de 60 segundos para ejercer tu derecho al voto. Durante este tiempo, se mostrará el título, descripción, tiempo restante y las opciones candidatas. Selecciona la opción de tu preferencia, y se generará un comprobante indicando que tu voto ha sido registrado. Este comprobante incluirá el título de la elección, la descripción, el nombre de la opción candidata elegida y su imagen distintiva.
      </Text>
      <Text style={styles.paragraph}>
        Luego de votar, puedes elegir entre "salir" o "compartir" el comprobante. La opción de compartir te permitirá enviar tu comprobante a aplicaciones alternativas como redes sociales o guardarlo en tu biblioteca de imágenes. La opción de salir te llevará de vuelta al inicio de la aplicación.
      </Text>
      <Text style={styles.paragraph}>
        Si no seleccionas ninguna opción candidata dentro del tiempo estipulado, tu voto se considerará nulo. Esta medida es importante para asegurar que la elección sea segura y sin vulnerabilidades. Una vez que hayas votado, el botón "ir a la votación" se desactivará, y no podrás volver a ingresar a la elección. Al finalizar la elección, el botón cambiará a "ver resultados", y podrás consultar los resultados durante una semana.
      </Text>

      <Text style={styles.sectionTitle}>ADMINISTRACIÓN</Text>
      <Text style={styles.paragraph}>
        En la sección de administración, hay seis opciones disponibles: registrar votante, modificar votante, registrar elección, modificar elección, ver elecciones en tiempo real y ajustes importantes. Cada una de estas opciones es fundamental para gestionar y mantener el sistema de votación de manera eficiente.
      </Text>

      <Text style={styles.subsectionTitle}>REGISTRAR VOTANTE</Text>
      <Text style={styles.paragraph}>
        Para registrar un nuevo votante, el jefe de control debe ingresar 11 datos: nacionalidad, cédula de identidad, nombre completo, fecha de nacimiento, estado, municipio, parroquia de residencia, contraseña, confirmación de contraseña, pregunta secreta y respuesta secreta. Los requisitos para el registro son la cédula laminada y la presencia física de la persona. Estos pasos aseguran que los datos del votante sean registrados de manera correcta y segura.
      </Text>
      <Text style={styles.paragraph}>
        El jefe de control puede ingresar los datos directamente, o anotar manualmente las preguntas al nuevo elector, para que éste anote manualmente sus respuestas. Cada dato debe ser ingresado y seleccionado correctamente, de lo contrario, la aplicación rechazará el intento de registro y notificará la falla mediante un mensaje de letras rojas.
      </Text>

      <Text style={styles.subsectionTitle}>MODIFICAR VOTANTE</Text>
      <Text style={styles.paragraph}>
        Para modificar un votante, ingresa la cédula de identidad y presiona "buscar votante". Aparecerán los datos principales del usuario para corroborar su identidad. Puedes editar (lápiz) o eliminar (papelera) al votante según sea necesario, cumpliendo con los mismos requisitos que para el registro inicial: presencia física y cédula laminada.
      </Text>
      <Text style={styles.paragraph}>
        El protocolo de edición de datos es similar al del registro de un nuevo votante. Esta funcionalidad es esencial para mantener actualizada la base de datos de votantes y asegurar que solo las personas correctamente registradas puedan participar en las elecciones.
      </Text>

      <Text style={styles.subsectionTitle}>REGISTRAR ELECCIÓN</Text>
      <Text style={styles.paragraph}>
        Para registrar una elección, debes ingresar los siguientes datos: título de la elección, descripción, fecha de comienzo y culminación, tipo de elección (normal o especial) y lugar de la elección (país, estado, municipio o parroquia). Luego, ingresa las opciones candidatas con su nombre y URL de imagen.
      </Text>
      <Text style={styles.paragraph}>
        El tipo de elección se define como normal (para la población mayor de edad) o especial (para toda la población de la aplicación, incluidos menores de edad). El lugar de la elección puede ser a nivel de país, estado, municipio o parroquia, permitiendo una flexibilidad en el alcance de las elecciones.
      </Text>
      <Text style={styles.paragraph}>
        Después de registrar todas las opciones candidatas, puedes editar (lapiz) o eliminar (papelera) cualquiera de ellas. Si deseas añadir más opciones después de haber editado alguna, utiliza el botón "+ agregar opción". Este proceso asegura que todas las opciones candidatas sean registradas correctamente antes de finalizar el registro.
      </Text>
      <Text style={styles.paragraph}>
        Las elecciones deben ser aprobados por el consejo de jefes de control (esta aprobación es esencial para asegurar la integridad y validez de las elecciones, ya sean políticas o sectoriales).
      </Text>

      <Text style={styles.subsectionTitle}>MODIFICAR ELECCIÓN</Text>
      <Text style={styles.paragraph}>
        Para modificar una elección, selecciona la elección publicada y edita (lapiz) o elimina (papelera) los datos según sea necesario. Los cambios en las elecciones deben ser aprobados por el consejo de jefes de control (esta aprobación es esencial para asegurar la integridad y validez de las elecciones, ya sean políticas o sectoriales), y a su vez realiza un comunicado público explicando los motivos de sus decisiones (este proceso garantiza transparencia y confianza en el sistema de votación).
      </Text>

      <Text style={styles.subsectionTitle}>VER ELECCIONES EN TIEMPO REAL</Text>
      <Text style={styles.paragraph}>
        En esta sección, se muestran las elecciones publicadas con su descripción y fechas. Al ingresar a una elección, puedes ver el número de electores inscritos, votos efectuados, votos nulos y porcentaje de participación. También puedes ver los votos y porcentaje de votos de cada opción candidata.
      </Text>
      <Text style={styles.paragraph}>
        Del lado derecho de electores inscritos, aparece el cuaderno electoral de cada elección, ingresamos y observamos la cédula de identidad y el nombre completo de cada votante.
      </Text>
      <Text style={styles.paragraph}>
        Esta información es clasificada y solo accesible por los jefes de control hasta que finalice la elección y se publiquen los resultados. Esta funcionalidad permite un seguimiento en tiempo real de las elecciones, asegurando que el proceso se desarrolla de manera transparente y ordenada.
      </Text>

      <Text style={styles.subsectionTitle}>AJUSTES IMPORTANTES</Text>
      <Text style={styles.paragraph}>
        Esta sección muestra todos los movimientos realizados desde el usuario institucional, desde el registro, edición y eliminación de votantes hasta el registro, edición y eliminación de elecciones, también el escrutinio de elecciones en tiempo real. Cada movimiento posee su descripción, fecha y hora de la acción, y número de referencia.
      </Text>
      <Text style={styles.paragraph}>
        Igualmente, esta información es clasificada y solo para uso de los jefes de control. Esto asegura que toda la actividad en el sistema de votación sea monitoreada y registrada, proporcionando una capa adicional de seguridad y robustez al sistema.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 60,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  subsectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 10,
    lineHeight: 24,
    textAlign: 'justify',
  },
  logo: {
    width: 350,
    height: 500,
    marginBottom: 120,
  },
});

export default ManualUsuarioScreen;
