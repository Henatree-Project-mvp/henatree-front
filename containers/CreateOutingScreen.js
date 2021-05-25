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
  Platform,
  SafeAreaView,
} from "react-native";
import colors from "../assets/colors";
import YellowNextButton from "../components/YellowNextButton";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import OutingTypeOpacity from "../components/OutingTypeOpacity";
import OutingStepBar from "../components/OutingStepBar";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function CreateOutingScreen({ navigation, route }) {
  const [stepNum, setStepNum] = useState(1);
  const [name, setName] = useState();
  const [type, setType] = useState();
  const [pictures, setPictures] = useState();
  const [description, setDescription] = useState();
  const [place, setPlace] = useState();
  const [tags, setTags] = useState();

  {
    /** STATES USEFULL FOR SETTING THE DATE  **/
  }
  const [date, setDate] = useState(Date.now()); //new Date(1621869679000)
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  {
    /*------------------*/
  }

  {
    /* FUNCTION FOR SETTING DATE  */
  }
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("datetime");
  };

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  {
    /*----------------------------*/
  }

  const pressYellowBtn = () => {
    setStepNum(stepNum + 1);
  };

  return (
    <SafeAreaView>
      {/*--------------------------------------------*/}

      {stepNum === 1 && (
        <View>
          {/* A RETIRER PLUS TARD*/}
          <OutingStepBar stepNum={stepNum} setStepNum={setStepNum} />

          {/*--------------------------------------------*/}

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
            <OutingStepBar stepNum={stepNum} setStepNum={setStepNum} />
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
            <OutingStepBar stepNum={stepNum} setStepNum={setStepNum} />

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

      {stepNum === 4 && (
        <View>
          <View style={styles.mainView}>
            <OutingStepBar stepNum={stepNum} setStepNum={setStepNum} />

            <Text style={styles.title}>Quand se déroulera cette sortie </Text>
            <Text style={styles.p}>
              Nous avons besoin de quelques informations pour publier ta sortie
            </Text>

            <View style={styles.container}>
              <View>
                {show ? (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                    locale="fr-Fr"
                  />
                ) : (
                  <TouchableOpacity onPress={showDatepicker}>
                    <Text>Ajouter une data</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>

            <Text>{date.toLocaleString("fr-FR", options)}</Text>
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

      {stepNum === 5 && (
        <View>
          <View style={styles.mainView}>
            <OutingStepBar stepNum={stepNum} setStepNum={setStepNum} />

            <Text style={styles.title}>Où se déroulera cette sortie?</Text>
            <Text style={styles.p}>
              Nous avons besoin de quelques informations pour publier ta sortie
            </Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(e) => {
                setPlace(e);
              }}
              placeholder="Indique l'adresse de la sortie"
            />
            <Text>{place}</Text>
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

      {stepNum === 6 && (
        <View>
          <View style={styles.mainView}>
            <OutingStepBar stepNum={stepNum} setStepNum={setStepNum} />

            <Text style={styles.title}>De quel type de sortie s'agit-il?</Text>
            <Text style={styles.p}>
              Nous avons besoin de quelques informations pour publier ta sortie
            </Text>

            <View style={styles.tagsView}>
              <OutingTypeOpacity
                text="Aller boire un verre"
                set={setTags}
                size="small"
              />
              <OutingTypeOpacity text="Restaurant" set={setTags} size="small" />
              <OutingTypeOpacity text="Sport" set={setTags} size="small" />
              <OutingTypeOpacity
                text="Sortie en plein air"
                set={setTags}
                size="small"
              />
              <OutingTypeOpacity text="Cinéma" set={setTags} size="small" />
              <OutingTypeOpacity
                text="Art/culturel"
                set={setTags}
                size="small"
              />
              <OutingTypeOpacity text="Musique" set={setTags} size="small" />
            </View>

            <Text>{tags}</Text>
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
    </SafeAreaView>
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
  tags: {
    marginRight: 5,
  },
  tagsView: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
