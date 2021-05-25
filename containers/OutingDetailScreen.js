import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRoute } from "@react-navigation/core";
import { useNavigation } from "@react-navigation/core";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Animate,
  Image,
  ScrollView,
  ImageBackground,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";

//Import des datas
import sortie from "../assets/sortie.json";

//Import des couleurs
import colors from "../assets/colors";
const { yellow, blue, darkBlue, dark, errorColor, greyButton, greyFont } =
  colors;

//Import des composants
import Tags from "../components/Tags";
import PartCard from "../components/PartCard";

export default function OutingDetailScreen({ navigation, route }) {
  //declaration des datas
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://henatree-api.herokuapp.com/hangouts/${route.params.id}`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwYWNmNDA2NGNhODJmMDAxNTk1NTU0MSIsImlhdCI6MTYyMTk0ODQ2MSwiZXhwIjoxNjI0NTQwNDYxfQ.-v4QpaHTxHJA4_vm6xnalVQy3sRUdRqgHCEOWFl2aIg",
            },
          }
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        alert(error.response.data.error);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <ActivityIndicator />
  ) : (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Image
          style={styles.mainPhoto}
          source={{
            uri: "https://res.cloudinary.com/lilycloud/image/upload/v1621786339/sorties/sortie-rando_cejixl.jpg",
          }}
        />
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
                Publié {data.published_at}
              </Text>
            </View>
          </View>
          <Text style={styles.titreSortie}>
            {data.name} - id: {data._id}
          </Text>
          <Text
            style={styles.txtInfosSortie}
          >{`${data.release_date}  - ${data.participants} participants - ${data.location.display} `}</Text>
          <View style={styles.tagCloud}>
            <Tags />
            <Tags />
            <Tags />
          </View>
          <View style={styles.descZone}>
            <Text style={styles.descTitle}>Description</Text>
            <Text style={styles.descTxt}>{data.description}</Text>
          </View>
          <View style={styles.partZone}>
            <Text style={styles.descTitle}>
              Les participants ({data.participants})
            </Text>
            <PartCard />
            <PartCard />
            <PartCard />
            <PartCard />
          </View>
          <TouchableOpacity style={styles.buttonRes}>
            Réserver une sortie
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // GLOBAL--------------
  container: {
    backgroundColor: "white",
    height: "100%",
  },
  mainPhoto: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
  },
  // DETAIL CARD--------------
  detailCard: {
    backgroundColor: "white",
    width: "100%",
    borderRadius: 20,
    padding: 20,
    marginTop: -50,
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
  // Participants Zone--------------
  partZone: {
    borderBottomColor: greyButton,
    borderBottomWidth: 1,
    paddingBottom: 20,
    paddingTop: 20,
    marginBottom: 100,
  },
});
