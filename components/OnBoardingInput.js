import React from "react";
import { Button, Text, TextInput, View, StyleSheet } from "react-native";
import { useState } from "react";

const OnBoardingInput = ({ title, description, placeholder, onPress }) => {
  return (
    <View style={styles.onBoard}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description} numberOfLines={2}>
        {description}
      </Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onPress={onPress}
      />
    </View>
  );
};

export default OnBoardingInput;

const styles = StyleSheet.create({
  onBoard: {
    width: "90%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    paddingTop: 20,
    fontSize: 16,
    fontWeight: "300",
    lineHeight: 25,
  },
  input: {
    paddingTop: 20,
    fontSize: 18,
  },
});
