import React from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  SafeAreaView,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
//Import des couleurs
import colors from "../assets/colors";
const { yellow, blue, darkBlue, dark, errorColor, greyButton, greyFont } =
  colors;

const Tags = ({ name }) => {
  return (
    <TouchableOpacity style={styles.tags}>
      <Text style={styles.txtTags}>{name}</Text>
    </TouchableOpacity>
  );
};

export default Tags;

const styles = StyleSheet.create({
  tags: {
    backgroundColor: greyButton,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    width: 100,
    height: 50,
    marginRight: 5,
  },
  txtTags: {
    fontSize: 16,
    fontWeight: "bold",
    color: dark,
  },
});
