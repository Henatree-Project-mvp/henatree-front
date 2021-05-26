import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";

import CardSetupProfil from "../../components/CardSetupProfil";
import colors from "../../assets/colors";

const FirstStep = () => {
  const choices = [
    { icon: require("../../assets/img/Vector.png"), title: "Sport" },
    { icon: require("../../assets/img/Vector-5.png"), title: "Art et culture" },
    { icon: require("../../assets/img/Vector-1.png"), title: "Cinéma" },
    { icon: require("../../assets/img/Vector-6.png"), title: "Voyage" },
    { icon: require("../../assets/img/Vector-2.png"), title: "Photographie" },
    {
      icon: require("../../assets/img/Vector-7.png"),
      title: "Jeux de société",
    },
    { icon: require("../../assets/img/Vector-3.png"), title: "Peinture" },
    { icon: require("../../assets/img/Vector-8.png"), title: "Musique" },
    { icon: require("../../assets/img/Vector-4.png"), title: "Technologie" },
    { icon: require("../../assets/img/Vector-9.png"), title: "Jeux vidéos" },
  ];
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.h1}>
          Quelles sont les sorties que tu souhaiterais faire{" "}
          <Text style={styles.facultatif}>(facultatif)</Text>
        </Text>
        <Text style={styles.p}>
          Nous avons besoin d’informations complémentaires afin de te proposer
          les sorties qui te correspondent le mieux.
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
    </ScrollView>
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

export default FirstStep;
