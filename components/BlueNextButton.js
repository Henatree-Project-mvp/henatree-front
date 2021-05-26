import React from "react";
import { TouchableOpacity, StyleSheet, Text, Dimensions } from "react-native";
import colors from "../assets/colors";

const YellowNextButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>Continuer</Text>
    </TouchableOpacity>
  );
};

export default YellowNextButton;

const styles = StyleSheet.create({
  button: {
    width: Dimensions.get("window").width,
    position: "absolute",
    bottom: 0,
    right: 0,
    padding: 10,
    height: 72,
    justifyContent: "center",
    alignItems: "center",
    borderColor: colors.blueLogo,
    borderWidth: 10,
    backgroundColor: colors.blueLogo,
  },

  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
