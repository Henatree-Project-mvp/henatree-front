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

const ImageRandom = () => {
  const images = [
    "https://res.cloudinary.com/lilycloud/image/upload/v1621786339/sorties/sortie-musee_ttdpbb.jpg",
    "https://res.cloudinary.com/lilycloud/image/upload/v1621786339/sorties/sortie-rando_cejixl.jpg",
    "https://res.cloudinary.com/lilycloud/image/upload/v1621786339/sorties/sortie-concert_oxifpk.jpg",
    "https://res.cloudinary.com/lilycloud/image/upload/v1621786339/sorties/sortie-plage_b9dq9x.jpg",
    "https://res.cloudinary.com/lilycloud/image/upload/v1621786339/sorties/sortie-photo_kmbrcb.jpg",
    "https://res.cloudinary.com/lilycloud/image/upload/v1621786339/sorties/sortie-jeu-video_pf0zcl.jpg",
  ];
  const index = Math.floor(Math.random() * images.length);

  return (
    <Image
      style={styles.mainPhoto}
      source={{
        uri: images[index],
      }}
    />
  );
};

export default ImageRandom;

const styles = StyleSheet.create({
  mainPhoto: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
    position: "relative",
  },
});
