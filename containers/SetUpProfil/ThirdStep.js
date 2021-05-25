import React from "react";
import { Text, View, StyleSheet } from "react-native";

import CardSetupProfil from "../../components/CardSetupProfil";
import colors from "../../assets/colors";

const ThirdStep = () => {
  const choices = [
    { icon: require("../../assets/img/Vector-couple.png"), title: "En couple" },
    {
      icon: require("../../assets/img/Vector-single.png"),
      title: "Célibataire",
    },
  ];
  return (
    <View style={styles.container}>
      <Text>Etape 3/4</Text>
      <Text style={styles.h1}>
        Quelle est ta situation amoureuse ?{" "}
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

export default ThirdStep;
