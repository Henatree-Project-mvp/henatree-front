import React from "react";
import { useNavigation } from "@react-navigation/core";
import {
  StyleSheet,
  Button,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Platform,
  ScrollView,
} from "react-native";
import colors from "../assets/colors";
import categories from "../assets/categories.json";
import sorties from "../assets/sorties.json";

export default function HomeScreen({ navigation }) {
  // Map on outings
  const displayOutings = sorties.map((elem, index) => {
    return (
      <TouchableOpacity
        key={index}
        style={styles.colOuting}
        onPress={() => {
          navigation.navigate("OutingDetail", {
            outingId: elem.id,
          });
        }}
      >
        <Image source={{ uri: elem.photo }} style={styles.outingImg}></Image>
        <Text style={styles.outingTitle}>{elem.titre}</Text>
        <Text style={styles.outingSubTitle}>
          {elem.dateSortie} {elem.horaireSortie} . {elem.nbParticipants}/
          {elem.maxParticipants} participants . {elem.ville}
        </Text>
      </TouchableOpacity>
    );
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>
            Faites des rencontres différemment 😍
          </Text>
          <TextInput
            style={styles.headerInput}
            placeholder="Où voulez-vous sortir ?"
          ></TextInput>
        </View>

        {/* Content */}

        <View style={styles.content}>
          {/* Title Content */}
          <Text style={styles.contentTitle}>De quoi as-tu envie ?</Text>
          <Text style={styles.contentSubTitle}>
            Lorem ipsum dolor sit amet.
          </Text>

          {/* Line Activity */}
          <ScrollView
            style={styles.lineActivity}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <View style={styles.colActivity}>
              <Image
                source={{ uri: sorties[0].photo }}
                style={styles.activityImg}
              />
              <Text style={styles.textActivity}>Musique</Text>
            </View>
            <View style={styles.colActivity}>
              <Image
                source={{ uri: sorties[1].photo }}
                style={styles.activityImg}
              />
              <Text style={styles.textActivity}>Randonnées</Text>
            </View>
            <View style={styles.colActivity}>
              <Image
                source={{ uri: sorties[2].photo }}
                style={styles.activityImg}
              />
              <Text style={styles.textActivity}>Photos</Text>
            </View>
            <View style={styles.colActivity}>
              <Image
                source={{ uri: sorties[0].photo }}
                style={styles.activityImg}
              />
              <Text style={styles.textActivity}>Musique</Text>
            </View>
          </ScrollView>

          {/* Les sorties */}

          <View style={styles.outings}>
            <Text style={styles.contentTitle}>
              Les sorties à côté de chez toi
            </Text>
            <ScrollView
              style={styles.lineOutings}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {/* Cols Outing */}
              {displayOutings}
            </ScrollView>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("OutingDetail");
          }}
        >
          <Text style={{ fontSize: 18, color: "blue" }}>Voir une sortie</Text>
        </TouchableOpacity>
        <Button
          title="Voir les sorties / Sorties à la une"
          onPress={() => {
            navigation.navigate("Outings");
          }}
        />
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
    marginTop: 40,
    marginBottom: 80,
  },
  colOuting: {
    marginRight: 30,
  },
  lineOutings: {
    marginTop: 20,
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
});
