import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRoute } from "@react-navigation/core";
import { useNavigation } from "@react-navigation/core";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  ActivityIndicator,
} from "react-native";

//Import des couleurs
import colors from "../assets/colors";
const { yellow, blue, darkBlue, dark, errorColor, greyButton, greyFont } =
  colors;
//Import des datas
// import hangouts from "../assets/hangouts.json";

//import composants
import ImageRandom from "../components/ImageRandom";

export default function OutingsScreen({ navigation, route }) {
  //declaration des datas
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  //Chargement des données de l'API via la fonction fetchData
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://henatree-api.herokuapp.com/hangouts",
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwYWNmNDA2NGNhODJmMDAxNTk1NTU0MSIsImlhdCI6MTYyMTk0ODQ2MSwiZXhwIjoxNjI0NTQwNDYxfQ.-v4QpaHTxHJA4_vm6xnalVQy3sRUdRqgHCEOWFl2aIg",
            },
          }
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        alert("An error occurred");
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <ActivityIndicator />
  ) : (
    <View>
      <FlatList
        data={data}
        style={styles.container}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("OutingDetail", { hangoutId: item._id })
              }
            >
              {/* <Image
                style={styles.photoSortie}
                source={{
                  uri: "https://res.cloudinary.com/lilycloud/image/upload/v1621786339/sorties/sortie-rando_cejixl.jpg",
                }}
              /> */}
              <ImageRandom />
              <Text style={styles.titreSortie}>{item.name}</Text>
              <Text
                style={styles.txtInfosSortie}
              >{`${item.release_date} - ${item.participant_count} participants - ${item.place_display} `}</Text>
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
