import React from "react";
import { Button, Text, TextInput, View, StyleSheet } from "react-native";
import colors from "../../assets/colors";

const FourthStep = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>
        Dans quel coin souhaites-tu faire des sorties{" "}
        <Text style={styles.facultatif}>(facultatif)</Text>
      </Text>
      <Text style={styles.p}>
        Nous avons besoin d’informations complémentaires afin de te proposer les
        sorties qui te correspondent le mieux.
      </Text>
      <TextInput style={styles.input} placeholder="Indique ta ville" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
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

  input: {
    color: colors.greyFont,
    fontSize: 20,
  },
});

export default FourthStep;
