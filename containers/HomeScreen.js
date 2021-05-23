import React from "react";
import { useNavigation } from "@react-navigation/core";
import { Button, Text, View, TouchableOpacity } from "react-native";
import colors from "../assets/colors";
import categories from "../assets/categories.json";
import sorties from "../assets/sorties.json";

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text style={{ fontSize: 26, color: colors.darkblue }}>
        Faites des rencontres différemment
      </Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("OutingDetail");
        }}
      >
        <Text style={{ fontSize: 18, color: "blue" }}>Voir une sortie</Text>
      </TouchableOpacity>
      <Button
        title="Voir les sorties / Sorties à la une"
        onPress={() => {
          navigation.navigate("Outings");
        }}
      />
    </View>
  );
}
