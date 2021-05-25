import React, { useState } from "react";
import axios from "axios";
import { useNavigation } from "@react-navigation/core";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  StyleSheet,
  SafeAreaView,
  Button,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import colors from "../assets/colors";

export default function SignInScreen({ setToken }) {
  const navigation = useNavigation();
  const API_URL = "http://henatree-api.herokuapp.com";

  // temporary
  const token_temp =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwYWQwYTI0YWY5OGE2MDAxNWU2YjE1ZSIsImlhdCI6MTYyMTk1NzkxNSwiZXhwIjoxNjI0NTQ5OTE1fQ.enn-9vdbbSrK-ODFk4ewFYO06HPe1ntVUavGsn4-WKs";
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  // error
  // 1: email non saisi
  // 2: password non saisi
  // 3: bad authentification
  // 4: unknow error
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    if (identifier && password) {
      const data = { identifier, password };
      try {
        const response = await axios.post(`${API_URL}/auth/local`, data);

        const token = response.data.jwt;
        console.log(token);
        if (token) {
          setToken(token);
          setError(0);
        }
      } catch (error) {
        console.log(error);
        setError(3);
        // if (error === "Request failed with status code 400") {
        //   setError(3);
        // } else {
        //   setError(4);
        // }
      }
    } else {
      if (!identifier) {
        setError(1);
      } else {
        setError(2);
      }
    }
  };

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Connexion</Text>
        {/* EMAIL */}
        <TextInput
          style={styles.signInInput}
          placeholder="E-mail"
          onChangeText={(text) => {
            setIdentifier(text);
          }}
          autoCapitalize="none"
        ></TextInput>
        {error === 1 && (
          <Text style={styles.textError}>*email obligatoire</Text>
        )}
        {/* PASSWORD */}
        <TextInput
          style={styles.signInInput}
          placeholder="Mot de passe"
          secureTextEntry={true}
          autoCapitalize="none"
          onChangeText={(text) => {
            setPassword(text);
          }}
        ></TextInput>
        {error === 2 && (
          <Text style={styles.textError}>*mot de passe obligatoire</Text>
        )}
        {error === 3 && (
          <Text style={styles.textError}>
            *les identifiants ne sont pas corrects
          </Text>
        )}
        {/* CONNECT */}
        <TouchableOpacity

          style={styles.button}
          onPress={async () => {
            handleSubmit();


          }}
          // onPress={async () => {
          //   const userToken = "secret-token";
          //   setToken(userToken);
          // }}
        >
          <Text style={styles.text}>Se connecter</Text>
        </TouchableOpacity>
      </View>

      {/* content */}
      <View style={styles.content}>
        {/* OU */}
        <View style={styles.lines}>
          <View style={styles.line} />
          <View>
            <Text style={styles.ouText}>OU</Text>
          </View>
          <View style={styles.line} />
        </View>
        {/* Buttons */}
        <View>
          {/* Facebook */}
          <TouchableOpacity
            style={styles.buttonSocial}
            onPress={async () => {
              const userToken = token_temp;
              setToken(userToken);
            }}
          >
            <Image
              style={styles.imgLogoFacebook}
              source={require("../assets/img/logo-facebook.png")}
            />
            <Text style={styles.buttonSocialText}>
              Se connecter avec Facebook
            </Text>
          </TouchableOpacity>
          {/* Google */}
          <TouchableOpacity
            style={styles.buttonSocial}
            onPress={async () => {
              const userToken = token_temp;
              setToken(userToken);
            }}
          >
            <Image
              style={styles.imgLogoGoogle}
              source={require("../assets/img/logo-google.png")}
            />
            <Text style={styles.buttonSocialText}>
              Se connecter avec Google
            </Text>
          </TouchableOpacity>
        </View>
        {/* Navigate to onBoarding */}
        <View style={styles.ask}>
          <Text style={styles.askText}>Je ne suis pas inscrit, </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("OnBoarding");
            }}
          >
            <Text style={styles.askCo}> créer un compte</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // paddingTop: Platform.OS === "android" ? 35 : 0,
    paddingTop: 40,
    backgroundColor: colors.yellow,
    flex: 1,
  },

  header: {
    paddingTop: 40,
    paddingHorizontal: 40,
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 28,
    color: colors.darkBlue,
    fontWeight: "700",
  },
  signInInput: {
    marginTop: 20,
    backgroundColor: "white",
    paddingLeft: 20,
    width: "100%",
    height: 60,
    borderRadius: 6,
  },
  textError: {
    color: colors.errorColor,
  },
  button: {
    width: "100%",
    backgroundColor: colors.blue,
    borderRadius: 8,
    marginTop: 40,
    paddingVertical: 20,
  },
  text: {
    color: "white",
    fontSize: 18,
    lineHeight: 24,
    fontWeight: "bold",
    textAlign: "center",
  },

  content: {
    marginTop: 30,
    width: "100%",
    height: "100%",
    paddingTop: 30,
    alignItems: "center",
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  ouText: {
    width: 50,
    textAlign: "center",
    opacity: 0.5,
    color: "#9FA7B3",
  },

  lines: {
    flexDirection: "row",
    alignItems: "center",
  },
  line: {
    flex: 0.425,
    height: 1,
    backgroundColor: "#9FA7B3",
    opacity: 0.5,
  },
  buttonSocial: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    paddingHorizontal: 40,
    paddingVertical: 15,
    marginTop: 20,
    backgroundColor: "white",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.dark,
  },
  imgLogoFacebook: {
    height: 30,
    width: 14,
    marginRight: 10,
  },
  imgLogoGoogle: {
    height: 30,
    width: 30,
    marginRight: 10,
  },
  buttonSocialText: {
    color: colors.dark,
    fontSize: 16,
  },
  ask: {
    marginTop: 30,
    flexDirection: "row",
  },
  askText: {
    fontSize: 16,
  },
  askCo: {
    color: colors.blue,
    fontWeight: "bold",
    fontSize: 16,
    textDecorationLine: "underline",
  },
});
