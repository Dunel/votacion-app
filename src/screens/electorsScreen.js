import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

const ElectorsScreen = () => {
  const route = useRoute();
  const { userInfo } = useContext(AuthContext);
  const { type, typeId, roleElection } = route.params;
  const [elecInscritos, setElecInscritos] = useState(null);

  const fetchElectors = async () => {
    try {
      const res = await axios.post(
        `https://node.appcorezulia.lat/api/user/getelect`,
        { type, typeId, roleElection },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );
      //console.log("canfdsdf: " + res.data)
      setElecInscritos(res.data);
    } catch (error) {
      console.error("Error: ", error.response.data);
    }
  };

  useEffect(() => {
    fetchElectors();
  }, []);

  const renderElectorItem = ({ item }) => {
    return (
      <View style={styles.electorItem}>
        <Text style={styles.electorTitle}>{item.fullname}</Text>
        <Text>Cédula: {item.cedula}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <FlatList
          data={elecInscritos}
          renderItem={renderElectorItem}
          keyExtractor={(item) => item.cedula.toString()}
          contentContainerStyle={styles.flatListContent}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 20,
  },
  contentContainer: {
    flex: 1,
    width: "100%",
  },
  flatListContent: {
    flexGrow: 1,
  },
  electorItem: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#fff",
    width: "100%",
  },
  electorTitle: {
    fontWeight: "bold",
    marginBottom: 5,
  },
});

export default ElectorsScreen;
