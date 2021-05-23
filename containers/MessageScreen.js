import React from "react";
import { useRoute } from "@react-navigation/core";
import { Text, View } from "react-native";
import colors from "../assets/colors";

export default function MessageScreen() {
  return (
    <View>
      <Text style={{ fontSize: 26 }}>Message</Text>
      <Text>Fonctionnalité à réaliser ?</Text>
    </View>
  );
}
