import React, { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/core";
import { useNavigation } from "@react-navigation/core";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";
//Import des datas
import categories from "../assets/categories.json";
import sortie from "../assets/sortie.json";

//Import des couleurs
import colors from "../assets/colors";
const { yellow, blue, darkBlue, dark, errorColor, greyButton, greyFont } =
  colors;

//Import des composants
import Tags from "../components/Tags";
import PartCard from "../components/PartCard";

export default function OutingDetailScreen() {
  return (
    <ScrollView style={styles.container}>
      <ImageBackground style={styles.mainPhoto} source={{ uri: sortie.photo }}>
        <View style={styles.detailCard}>
          <View style={styles.ownerCard}>
            <View style={styles.col1}>
              <Image
                style={styles.ownerAvatar}
                source={{
                  uri: "https://res.cloudinary.com/lilycloud/image/upload/v1621868156/sorties/avatar-prov_vef4yi.jpg",
                }}
              />
            </View>
            <View style={styles.col2}>
              <Text style={styles.ownerName}>Martin Magnier</Text>
              <Text style={styles.publishInfos}>
                Publié le 14 févr. 2021 à 20h12
              </Text>
            </View>
          </View>
          <Text style={styles.titreSortie}>{sortie.titre}</Text>
          <Text
            style={styles.txtInfosSortie}
          >{`${sortie.dateSortie} ${sortie.horaireSortie} - ${sortie.nbParticipants}/${sortie.maxParticipants} participants - ${sortie.ville} `}</Text>
          <View style={styles.tagCloud}>
            <Tags />
            <Tags />
            <Tags />
          </View>
          <View style={styles.descZone}>
            <Text style={styles.descTitle}>Description</Text>
            <Text style={styles.descTxt}>{sortie.Description}</Text>
          </View>
          <View style={styles.partZone}>
            <Text style={styles.descTitle}>
              Les participants ({sortie.nbParticipants})
            </Text>
            <PartCard />
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  // GLOBAL--------------
  container: {
    backgroundColor: "white",
  },
  mainPhoto: {
    width: "100%",
    height: 300,
    position: "relative",
  },
  // DETAIL CARD--------------
  detailCard: {
    backgroundColor: "white",
    height: 600,
    width: "100%",
    borderRadius: 20,
    position: "absolute",
    bottom: -550,
    padding: 20,
  },
  // Owner infos --------------
  ownerCard: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  ownerAvatar: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginRight: 20,
  },
  publishInfos: {
    fontSize: 16,
    color: greyFont,
    fontWeight: "bold",
  },
  ownerName: {
    fontSize: 20,
    fontWeight: "bold",
    color: dark,
  },
  // Sortie infos --------------
  titreSortie: {
    color: blue,
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 10,
  },
  txtInfosSortie: {
    fontWeight: "bold",
    color: dark,
    marginBottom: 10,
    fontSize: 16,
  },
  // Zone de tags --------------
  tagCloud: {
    flexDirection: "row",
    borderBottomColor: greyButton,
    borderBottomWidth: 1,
    paddingBottom: 20,
  },
  // Description Zone--------------
  descZone: {
    borderBottomColor: greyButton,
    borderBottomWidth: 1,
    paddingBottom: 20,
    paddingTop: 20,
  },
  descTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: blue,
    marginBottom: 20,
  },
  descTxt: {
    lineHeight: 24,
    fontSize: 16,
  },
  partZone: {
    borderBottomColor: greyButton,
    borderBottomWidth: 1,
    paddingBottom: 20,
    paddingTop: 20,
  },
});
