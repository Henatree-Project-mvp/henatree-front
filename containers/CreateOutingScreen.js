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

export default function CreateOutingScreen({ navigation, route }) {
  const [stepNum, setStepNum] = useState(1);
  const [outingName, setOutingName] = useState();

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
            <Text style={{ fontSize: 26 }}>
              Quel est le nom de cette sortie
            </Text>
            <Text style={{ fontSize: 26 }}>
              Nous avons besoin de quelques informations pour publier ta sortie
            </Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(e) => {
                setOutingName(e);
              }}
            />
            <Text>{outingName}</Text>
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
            <Text style={{ fontSize: 26 }}>
              De quel type de sortie s'agit-il?
            </Text>
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
});
