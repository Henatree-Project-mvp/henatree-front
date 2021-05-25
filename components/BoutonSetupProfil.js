import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

//Import des couleurs
import colors from "../assets/colors";

const BoutonSetupProfil = ({ title }) => {
  const [isActive, setActive] = useState(false);

  return (
    <View style={styles.containerTest}>
      <TouchableOpacity
        style={[styles.container, isActive ? styles.active : ""]}
        activeOpacity={1}
        onPress={() => {
          setActive((isActive) => !isActive);
          console.log(isActive);
        }}
      >
        <View style={styles.view}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.greyButton,
    width: 335,
    height: 64,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginBottom: 16,
  },

  active: {
    backgroundColor: colors.yellow,
  },

  view: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  icon: {
    marginBottom: 10,
  },

  title: {
    fontSize: 16,
    fontWeight: "500",
    color: colors.darkBlue,
  },
});

export default BoutonSetupProfil;
