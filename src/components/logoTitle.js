import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const LogoTitle = () => {
  return (
    < >
      <Image
        style={styles.logo}
        source={require("../../assets/playstore.png")}
      />
      <Text style={styles.text}>INICIO</Text>
    </>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 50,
    height: 50,
  },
  text: {
    flex: 1,
    fontWeight: "bold",
    fontSize: 18,
    padding: 15
  },
});

export default LogoTitle;
