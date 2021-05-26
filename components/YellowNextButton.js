import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "../assets/colors";

const YellowNextButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <AntDesign name="arrowright" size={35} color="white" />
    </TouchableOpacity>
  );
};

export default YellowNextButton;

const styles = StyleSheet.create({
  button: {
    marginBottom: 75,
    position: "absolute",
    bottom: 0,
    right: 0,
    padding: 10,
    borderRadius: 80,
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    borderColor: colors.lightYellow,
    borderWidth: 10,
    backgroundColor: colors.yellow,
  },
});
