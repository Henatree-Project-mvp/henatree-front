import React from "react";
import { Button, Text, TextInput, View, StyleSheet } from "react-native";
import YellowNextButton from "../components/YellowNextButton";

export default function SignUpScreen({ setToken }) {
  return (
    <View style={styles.container}>
      <View>
        <Text>Etape 1/6</Text>
        <Text>Name: </Text>
        <TextInput placeholder="Username" />
        <Text>Password: </Text>
        <TextInput placeholder="Password" secureTextEntry={true} />
        <Button
          title="Sign up"
          onPress={async () => {
            const userToken = "secret-token";
            setToken(userToken);
          }}
        />
      </View>
      <YellowNextButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
