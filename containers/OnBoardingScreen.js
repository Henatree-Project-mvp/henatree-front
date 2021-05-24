import React from "react";
import { Button, Text, TextInput, View, StyleSheet } from "react-native";
import YellowNextButton from "../components/YellowNextButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useState } from "react";

export default function OnBoarding({ setToken }) {
  const [step, setStep] = useState(1);

  const handleSteps = () => {
    setStep(step + 1);
  };

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
      <YellowNextButton onPress={handleSteps} />
      {console.log(step)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
