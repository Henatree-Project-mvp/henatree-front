import React from "react";
import { useRoute } from "@react-navigation/core";
import { Text, View } from "react-native";
import categories from "../assets/categories.json";
import sortie from "../assets/sortie.json";

export default function OutingDetailScreen({ route }) {
  return (
    <View>
      <Text style={{ fontSize: 26 }}>
        Détail d'une sortie {route.params.outingId}
      </Text>
    </View>
  );
}
