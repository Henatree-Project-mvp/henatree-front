import React from "react";
import { useNavigation } from "@react-navigation/core";
import {
  StyleSheet,
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
  return (
    <View>
      {/* Image */}

      <Image
        style={styles.imgHeader}
        source={{
          uri: "https://res.cloudinary.com/lilycloud/image/upload/v1621786339/sorties/sortie-concert_oxifpk.jpg",
        }}
      />
      <View style={styles.content}>
        {/* Line Header */}

        <View style={styles.lineHeader}>
          <Image
            style={styles.logo}
            source={require("../assets/img/logo.svg")}
          />
          <Text style={styles.headerTitle}>henatree</Text>
        </View>

        {/* subTitle */}
        <Text style={styles.subTitle}>
          Enfin une solution pour faire des rencontres 100% amicales 😍
        </Text>
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
              navigation.navigate("OnBoarding");
            }}
          >
            <Text>Créer un compte</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imgHeader: {
    width: "100%",
    height: 300,
  },

  content: {
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 20,
    alignItems: "center",
  },

  lineHeader: {
    paddingTop: 48,
    flexDirection: "row",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 36,
    color: colors.blueLogo,
    fontWeight: "700",
  },
  logo: {
    width: 40,
    height: 40,
  },
  subTitle: {
    width: "80%",
    paddingTop: 20,
    color: colors.darkBlue,
    fontSize: 18,
    textAlign: "center",
  },
});
