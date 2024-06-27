import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

const LogsScreen = () => {
  const { userInfo } = useContext(AuthContext);
  const [logs, setLogs] = useState(null);

  const fetchLogs = async () => {
    try {
      const res = await axios.get(
        `https://node.appcorezulia.lat/api/logs`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );
      setLogs(res.data);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  const renderLogItem = ({ item }) => {
    const formattedId = item.id.toString().padStart(6, '0');
    return (
      <View style={styles.logItem}>
        <Text style={styles.logMessage}>{item.message}</Text>
        <Text>Fecha: {new Date(item.createdAt).toLocaleString()}</Text>
        <Text>Referencia: {formattedId}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <FlatList
          data={logs}
          renderItem={renderLogItem}
          keyExtractor={(item) => item.id.toString()}
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
  logItem: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#fff",
    width: "100%",
  },
  logMessage: {
    fontWeight: "bold",
    marginBottom: 5,
  },
});

export default LogsScreen;
