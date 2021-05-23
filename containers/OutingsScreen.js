import React from "react";
import { useRoute } from "@react-navigation/core";
import { useNavigation } from "@react-navigation/core";
import { Text, View, TouchableOpacity } from "react-native";
import colors from "../assets/colors";
import categories from "../assets/categories.json";
import sorties from "../assets/sorties.json";

export default function OutingsScreen({ navigation }) {
  console.log(sorties);
  return (
    <View>
      <Text style={{ fontSize: 26 }}>Sorties à la une</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("OutingDetail");
        }}
      >
        <Text style={{ fontSize: 18, color: "blue" }}>Voir une sortie</Text>
      </TouchableOpacity>
    </View>
  );
}
