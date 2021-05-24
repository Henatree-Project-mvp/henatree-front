import React from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "../assets/colors";

const OutingTypeOpacity = ({ onPress, text, size, set, clickable }) => {
  const handleOnPress = () => {
    set(text);
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handleOnPress}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

export default OutingTypeOpacity;

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    width: "90%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.greyButton,
    marginBottom: 12,
  },
});
