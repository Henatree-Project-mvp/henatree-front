import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Dimensions,
  Navigation,
} from "react-native";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

import colors from "../assets/colors";

import YellowNextButton from "../components/YellowNextButton";
import BlueNextButton from "../components/BlueNextButton";
import FirstStep from "../containers/SetUpProfil/FirstStep";
import SecondStep from "../containers/SetUpProfil/SecondStep";
import ThirdStep from "../containers/SetUpProfil/ThirdStep";
import FourthStep from "../containers/SetUpProfil/FourthStep";
import FinalStep from "../containers/SetUpProfil/FinalStep";

export default function SetUpProfilScreen() {
  const [step, setStep] = useState(1);
  const [setupProfil, setSetupProfil] = useState({});
  const navigation = useNavigation();

  const handleSteps = () => {
    setStep(step + 1);
  };

  const removeStep = () => {
    setStep((step) => step - 1);
  };

  const backNavigation = () => {
    if (step > 1) {
      removeStep();
    } else {
      navigation.goBack();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {step !== 5 && (
        <View style={styles.header}>
          <AntDesign
            name="left"
            size={24}
            color="black"
            onPress={() => {
              backNavigation();
            }}
          />
          <Text style={styles.text}>Etape {step}/4</Text>
          <View></View>
        </View>
      )}
      <View>
        {step === 1 && (
          <FirstStep
            setupProfil={setupProfil}
            setSetupProfil={setSetupProfil}
          />
        )}
        {step === 2 && (
          <SecondStep
            setupProfil={setupProfil}
            setSetupProfil={setSetupProfil}
          />
        )}
        {step === 3 && (
          <ThirdStep
            setupProfil={setupProfil}
            setSetupProfil={setSetupProfil}
          />
        )}
        {step === 4 && (
          <FourthStep
            setupProfil={setupProfil}
            setSetupProfil={setSetupProfil}
          />
        )}
        {step === 5 && (
          <FinalStep
            setupProfil={setupProfil}
            setSetupProfil={setSetupProfil}
          />
        )}
      </View>

      {step !== 5 && <YellowNextButton onPress={handleSteps} />}
      {step === 5 && (
        <BlueNextButton
          onPress={() => {
            navigation.goBack();
          }}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  header: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  text: {
    fontSize: 15,
    fontWeight: "600",
    transform: [{ translateX: -25 }],
  },
});
