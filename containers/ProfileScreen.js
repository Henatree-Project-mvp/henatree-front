import React from "react";
import { useRoute } from "@react-navigation/core";
import { Text, View, Button } from "react-native";
import colors from "../assets/colors";

export default function ProfileScreen({ setToken }) {
  return (
    <View>
      <Text style={{ fontSize: 26 }}>Profil</Text>
      <Button
        title="Log Out"
        onPress={() => {
          setToken(null);
        }}
      />
    </View>
  );
}
