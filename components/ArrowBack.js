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
import colors from "../assets/colors";

const ArrowBack = () => {
  return (
    <Button style={styles.arrowBack}>
      <FontAwesome name="chevron-left" size={24} color={"black"} />
    </Button>
  );
};

export default ArrowBack;

const styles = StyleSheet.create({
  arrowBack: {
    paddingLeft: 20,
  },
});
