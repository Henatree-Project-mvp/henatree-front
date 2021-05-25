import React from "react";
import { Text, View, StyleSheet } from "react-native";

import CardSetupProfil from "../../components/BoutonSetupProfil";
import colors from "../../assets/colors";

const SecondStep = () => {
  const choices = [
    { title: "Sport" },
    { title: "Art et culture" },
    { title: "Cinéma" },
    { title: "Voyage" },
    { title: "Photographie" },
  ];
  return (
    <View style={styles.container}>
      <Text>Etape 2/4</Text>
      <Text style={styles.h1}>
        Quelles est ton but ?{" "}
        <Text style={styles.facultatif}>(facultatif)</Text>
      </Text>
      <Text style={styles.p}>
        Nous avons besoin d’informations complémentaires afin de te proposer les
        sorties qui te correspondent le mieux.
      </Text>
      <View style={styles.cards}>
        {choices.map((choice) => {
          return (
            <CardSetupProfil
              key={choice.title}
              icon={choice.icon}
              title={choice.title}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  cards: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingTop: 24,
    justifyContent: "space-between",
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
  },
});

export default SecondStep;
