import React from "react";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
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
import colors from "../assets/colors";

const ArrowBack = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.arrowBack}
      onPress={() => navigation.navigate("Outings")}
    >
      <Entypo name="chevron-left" size={40} color="black" />
    </TouchableOpacity>
  );
};

export default ArrowBack;

const styles = StyleSheet.create({
  arrowBack: {
    paddingLeft: 10,
    position: "absolute",
    top: 10,
    zIndex: 2,
  },
});
