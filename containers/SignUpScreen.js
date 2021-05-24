import React from "react";
import {
  Button,
  Text,
  TextInput,
  View,
  StyleSheet,
  ImageBackground,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../assets/colors";
import { Dimensions } from "react-native";

export default function SignUpScreen({ setToken }) {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <ImageBackground
          style={styles.imgBg}
          source={require("../assets/img/img_signup.png")}
        />
      </View>
      <View style={styles.block}>
        <View style={styles.intro}>
          <View style={styles.logo}>
            <Image
              style={{ marginRight: 20 }}
              source={require("../assets/img/logo.png")}
            />
            <Image source={require("../assets/img/henatree.png")} />
          </View>
          <Text numberOfLines={2} style={styles.introText}>
            Enfin une solution pour faire des rencontres 100% amicales 😻
          </Text>
        </View>
        <View style={styles.opt}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("OnBoarding");
            }}
          >
            <Text style={styles.text}>Je m'inscris</Text>
          </TouchableOpacity>
          <View style={styles.lines}>
            <View style={styles.line} />
            <View>
              <Text
                style={{
                  width: 50,
                  textAlign: "center",
                  opacity: 0.5,
                  color: "#9FA7B3",
                }}
              >
                OU
              </Text>
            </View>
            <View style={styles.line} />
          </View>
          <View style={styles.ask}>
            <Text style={styles.askText}>Tu as déjà un compte ?</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("SignIn");
              }}
            >
              <Text style={styles.askCo}> Je me connecte</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  imgBg: {
    width: "100%",
    height: 460,
    position: "relative",
  },
  logo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  block: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: "100%",
  },
  intro: {
    justifyContent: "center",
    alignItems: "center",
  },
  introText: {
    paddingTop: 5,
    paddingLeft: 50,
    paddingRight: 50,
    marginBottom: 40,
    fontSize: 17,
    lineHeight: 30,
    fontWeight: "600",
    textAlign: "center",
  },
  opt: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: Dimensions.get("window").width - 50,
    backgroundColor: colors.blue,
    borderRadius: 8,
    paddingTop: 20,
    paddingBottom: 20,
  },
  text: {
    color: "white",
    fontSize: 18,
    lineHeight: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  lines: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
  },
  line: {
    flex: 0.425,
    height: 1,
    backgroundColor: "#9FA7B3",
    opacity: 0.5,
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
  },
});
