import React from "react";
import { FontAwesome } from "@expo/vector-icons";

import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";

const BtAddFavorite = () => {
  return (
    <TouchableOpacity
      style={styles.btFav}
      onPress={() => alert("Ajoutée au favoris")}
    >
      <FontAwesome name="heart-o" size={24} color="deeppink" />
    </TouchableOpacity>
    // <TouchableOpacity
    //   style={styles.btFav}
    //   onPress={() => alert("Ajoutée au favoris")}
    // >
    //   <FontAwesome name="heart-o" size={24} color="deeppink" />
    // </TouchableOpacity>
  );
};

export default BtAddFavorite;

const styles = StyleSheet.create({
  btFav: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 2,
    backgroundColor: "white",
    height: 40,
    width: 40,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});
