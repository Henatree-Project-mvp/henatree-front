import React from "react";
import { useNavigation } from "@react-navigation/core";
import { Button, Text, View } from "react-native";

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View>
      <Text style={{ fontSize: 26 }}>Faites des rencontres différemment</Text>
      <Text>Homepage</Text>
      <Button
        title="Voir les sorties"
        onPress={() => {
          navigation.navigate("Outings");
        }}
      />
    </View>
  );
}
