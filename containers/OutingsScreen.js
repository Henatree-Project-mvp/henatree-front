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
  return (
    <View>
      {/* <Text style={{ fontSize: 26 }}>Sorties à la une</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("OutingDetail");
        }}
      >
        <Text style={{ fontSize: 18, color: "blue" }}>Voir une sortie</Text>
      </TouchableOpacity> */}
      <FlatList
        data={sorties}
        style={styles.container}
        keyExtractor={(item) => item.categorie}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("OutingDetail", {
                  categorie: item.categorie,
                });
              }}
            >
              <Image style={styles.photoSortie} source={{ uri: item.photo }} />
              <Text style={styles.titreSortie}>{item.titre}</Text>
              <Text
                style={styles.txtInfosSortie}
              >{`${item.dateSortie} ${item.horaireSortie} - ${item.nbParticipants}/${item.maxParticipants} participants - ${item.ville} `}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "white",
  },
  photoSortie: {
    width: "100%",
    height: 200,
    marginBottom: 10,
  },
  titreSortie: {
    color: blue,
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
  },
  txtInfosSortie: {
    fontWeight: "bold",
    marginBottom: 10,
  },
});
