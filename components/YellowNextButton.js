import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "../assets/colors";

const YellowNextButton = ({ onPress }) => {
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <AntDesign name="arrowright" size={35} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default YellowNextButton;

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    right: 20,
    bottom: 0,
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
