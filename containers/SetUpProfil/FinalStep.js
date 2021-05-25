import React from "react";
import { Button, Text, TextInput, View, StyleSheet, Image } from "react-native";
import colors from "../../assets/colors";

const FinalStep = ({ step }) => {
  return (
    <View>
      <View style={styles.container}>
        <Image
          style={styles.img}
          source={require("../../assets/img/img_signup.png")}
          resizeMode="contain"
        />
        <Text style={styles.h1}>
          Félicitations ! ton compte henatree est créé 🎉
        </Text>
        <Text style={styles.p}>
          Ton compte henatree est maintenant actif. Consulte désormais les
          sorties proches des chez toi.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },

  h1: {
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 12,
    color: colors.darkBlue,
  },
  facultatif: {
    fontSize: 14,
  },
  p: {
    color: colors.greyFont,
    marginBottom: 33,
  },

  img: {
    flex: 1,
    width: 335,
  },
});

export default FinalStep;
