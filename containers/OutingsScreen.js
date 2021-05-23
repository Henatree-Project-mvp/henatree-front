import React from "react";
import { useRoute } from "@react-navigation/core";
import { useNavigation } from "@react-navigation/core";
import { Text, View, TouchableOpacity } from "react-native";
import colors from "../assets/colors";

export default function OutingsScreen({ navigation }) {
  return (
    <View>
      <Text style={{ fontSize: 26 }}>Sorties à la une</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("OutingDetail");
        }}
      >
        <Text>Voir une sortie</Text>
      </TouchableOpacity>
    </View>
  );
}
