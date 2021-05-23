import React from "react";
import { useNavigation } from "@react-navigation/core";
import { Button, Text, View, TouchableOpacity } from "react-native";
import colors from "../assets/colors";

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
        <Text>Voir une sortie</Text>
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
