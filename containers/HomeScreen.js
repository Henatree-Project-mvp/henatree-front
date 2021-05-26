import React, { useState, useEffect } from "react";
import axios from "axios";

import { useNavigation } from "@react-navigation/core";
import {
  StyleSheet,
  ActivityIndicator,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Platform,
  ScrollView,
} from "react-native";
import colors from "../assets/colors";
import categories from "../assets/categories.json";
import sorties from "../assets/sorties.json";
import { set } from "react-native-reanimated";

export default function HomeScreen({ navigation, userToken }) {
  const [data, setData] = useState();
  const [type, setType] = useState();
  const [nbHangouts, setNbHangouts] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

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
        // map to get format date and time and nb participants
        const dataTemp = response.data.map((elem, index) => {
          // date and time
          let date = new Date(elem.release_date);
          const optionsDate = {
            month: "short",
            day: "2-digit",
          };
          const optionsTime = {
            hour: "2-digit",
            minute: "2-digit",
          };
          const dateFormated = date.toLocaleDateString("fr-FR", optionsDate);
          const timeFormated = date.toLocaleTimeString("fr-FR", optionsTime);

          elem.date = dateFormated;
          elem.time = timeFormated;
          // nb participants
          let nbParticipants = 0;
          if (elem.participants) {
            nbParticipants = elem.participants.length;
          }
          elem.nbParticipants = nbParticipants;

          // Return
          return elem;
        });

        setData(dataTemp);

        // Type Hangouts
        const typeHangouts = [];
        for (let i = 0; i < response.data.length; i++) {
          const typeHangout = response.data[i].hangout_type;
          if (typeHangouts.indexOf(typeHangout) && typeHangout) {
            typeHangouts.push({ key: String(i), name: typeHangout });
          }
        }

        // nbHangouts
        setNbHangouts(response.data.length);

        setType(typeHangouts);

        setIsLoading(false);
      } catch (error) {
        console.log(error);
        alert("An error occurred");
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <ActivityIndicator size="large" color={colors.yellow} />
  ) : (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          Faites des rencontres différemment 😻
        </Text>
        <TextInput
          style={styles.headerInput}
          placeholder="Où voulez-vous sortir ?"
        ></TextInput>
      </View>

      {/* Content */}

      <ScrollView style={styles.content}>
        {/* Title Content */}
        <Text style={styles.contentTitle}>De quoi as-tu envie ?</Text>
        <Text style={styles.contentSubTitle}>Lorem ipsum dolor sit amet.</Text>

        {/* Line Activity */}
        <View style={styles.lineActivity}>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={type}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => {
              return (
                <View style={styles.colActivity}>
                  <Image
                    source={{ uri: sorties[0].photo }}
                    style={styles.activityImg}
                  />
                  <Text style={styles.textActivity}>{item.name}</Text>
                </View>
              );
            }}
          />
        </View>
        {/* Les sorties */}
        <View style={styles.outings}>
          <Text style={styles.contentTitle}>
            Les sorties à côté de chez toi
          </Text>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={data}
            style={styles.outings}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  style={styles.colOuting}
                  onPress={() => {
                    navigation.navigate("OutingDetail", {
                      outingId: item._id,
                    });
                  }}
                >
                  <Image
                    source={{
                      uri: "https://res.cloudinary.com/lilycloud/image/upload/v1621786339/sorties/sortie-concert_oxifpk.jpg",
                    }}
                    style={styles.outingImg}
                  ></Image>
                  <Text style={styles.outingTitle}>{item.name}</Text>
                  <Text style={styles.outingSubTitle}>
                    {item.date} {item.time}. {item.nbParticipants}/
                    {item.participant_count} participants . {item.place_display}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              navigation.navigate("Outings");
            }}
          >
            <Text style={styles.txtBtn}>Voir les sorties ({nbHangouts})</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 35 : 0,
    backgroundColor: colors.yellow,
    flex: 1,
  },

  header: {
    backgroundColor: colors.yellow,
    paddingVertical: 24,
    paddingHorizontal: 20,
  },

  headerTitle: {
    fontSize: 26,
    color: colors.darkblue,
  },

  headerInput: {
    marginTop: 20,
    backgroundColor: "white",
    paddingLeft: 20,
    width: "100%",
    height: 40,
    borderRadius: 8,
  },

  content: {
    paddingTop: 26,
    backgroundColor: "white",
    paddingHorizontal: 20,
    borderRadius: 12,
  },

  contentTitle: {
    color: colors.darkBlue,
    fontSize: 20,
    fontWeight: "500",
  },

  contentSubTitle: {
    paddingTop: 8,
    fontSize: 12,
    color: colors.greyFont,
  },

  lineActivity: {
    paddingTop: 20,
    flexDirection: "row",
  },

  colActivity: {
    alignItems: "center",
    marginRight: 20,
  },
  textActivity: {
    marginTop: 5,
    fontSize: 16,
    color: colors.dark,
  },
  activityImg: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },

  outings: {
    marginTop: 30,
    marginBottom: 40,
  },
  colOuting: {
    marginRight: 30,
  },
  lineOutings: {
    marginTop: 10,
    flexDirection: "row",
  },
  outingImg: {
    height: 200,
    width: 260,
  },
  outingTitle: {
    paddingTop: 4,
    fontSize: 18,
    fontWeight: "700",
    color: colors.blue,
  },
  outingSubTitle: {
    paddingTop: 4,
    fontSize: 14,
    color: colors.dark,
  },
  btn: {
    width: "100%",
    height: 60,
    borderColor: colors.blue,
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  txtBtn: {
    color: colors.blue,
    fontSize: 20,
  },
});
