import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const OutingStepBar = ({ stepNum, setStepNum }) => {
  return (
    <View style={styles.headerBar}>
      <MaterialIcons
        name="keyboard-arrow-left"
        size={24}
        color="black"
        style={styles.backArrow}
        onPress={() => {
          setStepNum(stepNum - 1);
        }}
      />

      <Text>Etape {stepNum}/7</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBar: {
    backgroundColor: "lightgrey",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  backArrow: {
    color: "black",
    position: "absolute",
    top: 13,
    left: 25,
  },
});

export default OutingStepBar;
