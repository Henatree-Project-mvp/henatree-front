import React from "react";
import { useRoute } from "@react-navigation/core";
import { Text, View, Button } from "react-native";
import colors from "../assets/colors";

export default function SetUpProfileScreen({ setToken }) {
  return (
    <View>
      <Text style={{ fontSize: 26 }}>Setup Profil</Text>
      <Button
        title="Log Out"
        onPress={() => {
          setToken(null);
        }}
      />
    </View>
  );
}
