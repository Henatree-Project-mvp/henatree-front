import React from "react";
import { Button, Text, View } from "react-native";
import colors from "../assets/colors";

export default function SettingsScreen({ setToken }) {
  return (
    <View>
      <Text>Hello Settings</Text>

      <Button
        title="Log Out"
        onPress={() => {
          setToken(null);
        }}
      />
    </View>
  );
}
