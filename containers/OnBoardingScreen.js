import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import YellowNextButton from "../components/YellowNextButton";
import { useState } from "react";
import HeaderSteps from "../components/HeaderSteps";
import OnBoardingInput from "../components/OnBoardingInput";
import { useNavigation } from "@react-navigation/core";
import { AntDesign } from "@expo/vector-icons";
// import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function OnBoarding({ setToken }) {
  const navigation = useNavigation();
  const [step, setStep] = useState(1);
  const [date, setDate] = useState(Date.now());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState("");

  // CHANGEMENT D'ETAPE

  const handleSteps = () => {
    if (step <= 4) {
      setStep(step + 1);
    }
  };
  const removeStep = () => {
    setStep(step - 1);
  };

  // DATE PICKER

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
    console.log("date===>", date, typeof date);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <>
      {step === 1 && (
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <SafeAreaView>
            <View style={styles.header}>
              <AntDesign
                name="left"
                size={24}
                color="black"
                onPress={() => {
                  navigation.goBack();
                }}
              />
              <HeaderSteps title="Etape 1/5" />
              <Text></Text>
            </View>
            <View style={styles.infos}>
              <OnBoardingInput
                step="1"
                placeholder="Indique ton pseudo"
                title="Choisi ton pseudo"
                description="Ce pseudo sera ton nom d’utilisateur unique sur henatree."
              />
              {step < 4 ? (
                <YellowNextButton onPress={handleSteps} />
              ) : (
                <Text>S'inscrire</Text>
              )}
            </View>
          </SafeAreaView>
        </KeyboardAvoidingView>
      )}
      {step === 2 && (
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <SafeAreaView>
            <View style={styles.header}>
              <AntDesign
                name="left"
                size={24}
                color="black"
                onPress={removeStep}
              />
              <HeaderSteps title="Etape 2/5" />
              <Text></Text>
            </View>
            <View style={styles.infos}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Quelle est ta date de naissance ?
              </Text>
              <Text
                style={{
                  paddingTop: 20,
                  fontSize: 16,
                  fontWeight: "300",
                  lineHeight: 25,
                }}
              >
                Nous l’utiliserons pour te mettre en relation avec des personnes
                de ton âge.
              </Text>
              {typeof date !== "number" && (
                <Text style={{ marginTop: 20, fontSize: 17 }}>
                  {date.toLocaleString("fr-FR", options)}
                </Text>
              )}

              {show ? (
                <DateTimePicker
                  style={{ marginTop: 20 }}
                  testID="dateTimePicker"
                  value={date}
                  mode={mode}
                  is24Hour={true}
                  display="spinner"
                  onChange={onChange}
                  locale="fr-Fr"
                />
              ) : (
                <View>
                  <TouchableOpacity onPress={showDatepicker}>
                    <Text style={styles.dateOpacity}>
                      Indique nous ta date de naissance
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
              {step < 4 ? (
                <YellowNextButton onPress={handleSteps} />
              ) : (
                <Text>S'inscrire</Text>
              )}
            </View>
          </SafeAreaView>
        </KeyboardAvoidingView>
      )}
      <View style={step !== 3 ? styles.hidden : styles.infos}>
        <View style={styles.header}>
          <AntDesign name="left" size={24} color="black" onPress={removeStep} />
          <HeaderSteps title="Etape 3/5" />
        </View>
        <OnBoardingInput
          step="3"
          placeholder="Indique ton adresse mail"
          title="Quelle est ton adresse mail ?"
          description="Elle te servira à t’identifier sur l’appli et à recevoir tes notifications"
        />
      </View>
      <View style={step !== 4 ? styles.hidden : styles.infos}>
        <View style={styles.header}>
          <AntDesign name="left" size={24} color="black" onPress={removeStep} />
          <HeaderSteps title="Etape 4/5" />
        </View>
        <OnBoardingInput
          step="4"
          placeholder="Indique ton mot de passe"
          title="Crée ton mot de passe"
          description="Nous avons besoin de quelques informations afin de compléter ton profil."
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  infos: {
    width: "90%",
    position: "relative",
    height: "90%",
    alignItems: "center",
  },
  header: {
    marginLeft: "5%",
    width: "80%",
    paddingBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  hidden: {
    display: "none",
  },
  date: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "white",
    height: 200,
    width: "100%",
    justifyContent: "center",
  },
  dateOpacity: {
    marginTop: 20,
    color: "grey",
    fontSize: 16,
  },
});
