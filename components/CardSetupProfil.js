import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

//Import des couleurs
import colors from "../assets/colors";

const CardSetupProfil = ({ icon, title }) => {
  const [isActive, setActive] = useState(false);

  return (
    <TouchableOpacity
      style={[styles.container, isActive ? styles.active : ""]}
      activeOpacity={1}
      onPress={() => {
        setActive((isActive) => !isActive);
        console.log(isActive);
      }}
    >
      <View style={styles.view}>
        <Image
          style={styles.icon}
          source={icon ? icon : require("../assets/favicon.png")}
        />
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.greyButton,
    width: 159,
    height: 106,
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

export default CardSetupProfil;
