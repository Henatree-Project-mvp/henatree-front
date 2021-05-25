import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import YellowNextButton from "../components/YellowNextButton";
import { useState } from "react";
import HeaderSteps from "../components/HeaderSteps";
import OnBoardingInput from "../components/OnBoardingInput";
import { useNavigation } from "@react-navigation/core";
import { AntDesign } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function OnBoarding({ setToken }) {
  const navigation = useNavigation();
  const [step, setStep] = useState(1);

  const handleSteps = () => {
    if (step <= 4) {
      setStep(step + 1);
    }
  };
  const removeStep = () => {
    setStep(step - 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <KeyboardAwareScrollView> */}
      <View style={step !== 1 ? styles.hidden : styles.infos}>
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
        </View>
        <OnBoardingInput
          step="1"
          placeholder="Indique ton pseudo"
          title="Choisi ton pseudo"
          description="Ce pseudo sera ton nom d’utilisateur unique sur henatree."
        />
      </View>
      <View style={step !== 2 ? styles.hidden : styles.infos}>
        <View style={styles.header}>
          <AntDesign name="left" size={24} color="black" onPress={removeStep} />
          <HeaderSteps title="Etape 2/5" />
        </View>
        <OnBoardingInput
          step="2"
          placeholder="Indique nous ta date de naissance"
          title="Quelle est ta date de naissance ?"
          description="Nous l’utiliserons pour te mettre en relation avec des personnes de ton âge."
        />
      </View>
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
      <YellowNextButton onPress={handleSteps} />
      {/* </KeyboardAwareScrollView> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // justifyContent: "center",
    alignItems: "center",
  },
  infos: {
    width: "90%",
  },
  header: {
    paddingBottom: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  hidden: {
    display: "none",
  },
});
