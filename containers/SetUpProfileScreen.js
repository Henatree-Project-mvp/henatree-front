import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { useState } from "react";

import YellowNextButton from "../components/YellowNextButton";
import FirstStep from "../containers/SetUpProfil/FirstStep";
import SecondStep from "../containers/SetUpProfil/SecondStep";
import ThirdStep from "../containers/SetUpProfil/ThirdStep";
import FourthStep from "../containers/SetUpProfil/FourthStep";
import FinalStep from "../containers/SetUpProfil/FinalStep";

export default function SetUpProfilScreen() {
  const [step, setStep] = useState(1);
  const [setupProfil, setSetupProfil] = useState({});

  const handleSteps = () => {
    setStep(step + 1);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
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
          <View style={styles.button}>{console.log(step)}</View>
        </View>
      </ScrollView>
      <YellowNextButton onPress={handleSteps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  button: {
    position: "absolute",
  },
});
