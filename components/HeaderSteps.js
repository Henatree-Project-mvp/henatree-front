import React from "react";
import { Text, View, StyleSheet } from "react-native";

const HeaderSteps = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default HeaderSteps;

const styles = StyleSheet.create({
  header: {
    paddingTop: 20,
    paddingBottom: 20,
    // paddingLeft: 20,
    // flexDirection: "row",
    // alignItems: "center",
  },
  text: {
    fontSize: 15,
    fontWeight: "600",
    // marginLeft: "46%",
  },
});
