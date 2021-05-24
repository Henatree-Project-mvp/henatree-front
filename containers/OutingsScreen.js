import React from "react";
import { useRoute } from "@react-navigation/core";
import { useNavigation } from "@react-navigation/core";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";

//Import des couleurs
import colors from "../assets/colors";
const { yellow, blue, darkBlue, dark, errorColor, greyButton, greyFont } =
  colors;
//Import des datas
import categories from "../assets/categories.json";
import sorties from "../assets/sorties.json";

export default function OutingsScreen({ navigation }) {
  console.log(sorties);
  return (
    <View>
      <Text style={{ fontSize: 26 }}>Sorties à la une</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("OutingDetail");
        }}
      >
        <Text style={{ fontSize: 18, color: "blue" }}>Voir une sortie</Text>
      </TouchableOpacity>
      <FlatList
        data={sorties}
        keyExtractor={(item) => item.categorie}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("OutingDetail");
              }}
            >
              <Image
                style={styles.outingPicture}
                source={{ uri: item.photo }}
              />
              <Text style={styles.outingTitle}>{item.titre}</Text>
              <Text
                style={styles.txtInfos}
              >{`${item.dateSortie} ${item.horaireSortie} - ${item.nbParticipants}/${item.maxParticipants} participants - ${item.ville} `}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  outingPicture: {
    width: "100%",
    height: 250,
  },
});
