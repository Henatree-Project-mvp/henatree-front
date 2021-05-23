import React from "react";
import { useNavigation } from "@react-navigation/core";
import { Button, Text, TextInput, View, TouchableOpacity } from "react-native";

export default function SignInScreen({ setToken }) {
  const navigation = useNavigation();
  return (
    <View>
      <View>
        <Text>E-mail: </Text>
        <TextInput placeholder="E-mail" />
        <Text>Mot de passe : </Text>
        <TextInput placeholder="Mot de passe" secureTextEntry={true} />
        <Button
          title="Connexion"
          onPress={async () => {
            const userToken = "secret-token";
            setToken(userToken);
          }}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        >
          <Text>Créer un compte</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
