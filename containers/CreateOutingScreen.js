import React, { useState } from "react";
import { useRoute } from "@react-navigation/core";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Button,
  TextInput,
} from "react-native";
import colors from "../assets/colors";
import YellowNextButton from "../components/YellowNextButton";
import { AntDesign } from "@expo/vector-icons";
import OutingTypeOpacity from "../components/OutingTypeOpacity";

export default function CreateOutingScreen({ navigation, route }) {
  const [stepNum, setStepNum] = useState(1);
  const [name, setName] = useState();
  const [type, setType] = useState();
  const [pictures, setPictures] = useState();
  const [description, setDescription] = useState();
  const [date, setDate] = useState();
  const [place, setPlace] = useState();
  const [tags, setTags] = useState();

  const pressYellowBtn = () => {
    setStepNum(stepNum + 1);
  };

  return (
    <>
      {/* A RETIRER PLUS TARD*/}
      <View>
        <Button
          title="-"
          onPress={() => {
            setStepNum(stepNum - 1);
          }}
        />
        <Text>{stepNum}</Text>
      </View>
      {/*--------------------------------------------*/}

      {stepNum === 1 && (
        <View>
          <View style={styles.mainView}>
            <Text style={styles.title}>Quel est le nom de cette sortie?</Text>
            <Text style={styles.p}>
              Nous avons besoin de quelques informations pour publier ta sortie
            </Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(e) => {
                setName(e);
              }}
              placeholder="Indique le nom de la sortie"
            />
            <Text>{name}</Text>
          </View>

          {/*********YELLOW BUTTON*******************/}

          <TouchableOpacity
            style={styles.yellowButton}
            onPress={pressYellowBtn}
          >
            <AntDesign name="arrowright" size={35} color="white" />
          </TouchableOpacity>

          {/******************************************/}
        </View>
      )}

      {stepNum === 2 && (
        <View>
          <View style={styles.mainView}>
            <Text style={styles.title}>De quel type de sortie s'agit-il?</Text>
            <Text style={styles.p}>
              Nous avons besoin de quelques informations pour publier ta sortie
            </Text>
            <OutingTypeOpacity text="Aller boire un verre" set={setType} />
            <OutingTypeOpacity text="Restaurant" set={setType} />
            <OutingTypeOpacity text="Sport" set={setType} />
            <OutingTypeOpacity text="Sortie en plein air" set={setType} />
            <OutingTypeOpacity text="Cinéma" set={setType} />
            <OutingTypeOpacity text="Art/culturel" set={setType} />
            <OutingTypeOpacity text="Musique" set={setType} />
            <Text>{type}</Text>
          </View>

          {/*********YELLOW BUTTON*******************/}

          <TouchableOpacity
            style={styles.yellowButton}
            onPress={pressYellowBtn}
          >
            <AntDesign name="arrowright" size={35} color="white" />
          </TouchableOpacity>

          {/******************************************/}
        </View>
      )}

      {stepNum === 3 && (
        <View>
          <View style={styles.mainView}>
            <Text style={styles.title}>
              Peux-tu décrire en quoi conciste cette sortie?
            </Text>
            <Text style={styles.p}>
              Nous avons besoin de quelques informations pour publier ta sortie
            </Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(e) => {
                setDescription(e);
              }}
              placeholder="Ajoute une description"
            />
            <Text>{name}</Text>
          </View>

          {/*********YELLOW BUTTON*******************/}

          <TouchableOpacity
            style={styles.yellowButton}
            onPress={pressYellowBtn}
          >
            <AntDesign name="arrowright" size={35} color="white" />
          </TouchableOpacity>

          {/******************************************/}
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  mainView: {
    height: 600,
    position: "relative",
    paddingBottom: 16,
    backgroundColor: "pink",
  },
  yellowButton: {
    position: "absolute",
    right: 20,
    bottom: 0,
    padding: 10,
    borderRadius: 80,
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    borderColor: colors.lightYellow,
    borderWidth: 10,
    backgroundColor: colors.yellow,
  },
  textInput: {
    backgroundColor: "lightgreen",
    height: 40,
  },

  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#201F3C",
  },
  p: {
    color: colors.dark,
    fontSize: 16,
  },
});
