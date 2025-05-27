import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import GetStartedScreen from "@/screens/GetStartedScreen/GetStartedScreen";
import ContinueScreen from "@/screens/ContinueScreen/ContinueScreen";
import ExtraStepScreen from "@/screens/ExtraStepScreen/ExtraStepScreen";

import ScrollIndicator from "@/components/ScrollIndicator";
import GreenButton from "@/components/Buttons/GreenButton/GreenButton";
import EsText from "@/components/EsText/EsText";

import { markOnboardingAsDone } from "@/utils/onboardingStorage";
import { scale, scaledFont, verticalScale } from "@/utils/scale";

const OnboardingContent = ({ navigation }: { navigation: any }) => {
  const [page, setPage] = useState(0);

  const pages = [
    { component: <GetStartedScreen /> },
    { component: <ContinueScreen /> },
    { component: <ExtraStepScreen /> },
  ];

  async function handleNext() {
    if (page < pages.length) {
      if (page == 2) {
        await markOnboardingAsDone();

        navigation.replace("PaywallScreen");
      } else {
        setPage(page + 1);
      }
    }
  }

  return (
    <View style={[styles.container]}>
      <View style={styles.innerContainer}>{pages[page].component}</View>
      <View style={styles.footer}>
        {page < pages.length && (
          <GreenButton
            title={page === 0 ? "Get Started" : "Continue"}
            onPress={handleNext}
          />
        )}

        {(page === 1 || page === 2) && (
          <View style={styles.dotsCss}>
            <ScrollIndicator page={page - 1} totalPages={3} />
          </View>
        )}

        {page === 0 && (
          <View style={styles.infoText}>
            <EsText
              size={scaledFont(11)}
              color="#597165B2"
              style={{
                marginTop: verticalScale(17),
                lineHeight: 15,
                textAlign: "center",
              }}
            >
              By tapping next, you are agreeing to PlantID Terms of Use &
              Privacy Policy.
            </EsText>
          </View>
        )}
      </View>
    </View>
  );
};

const OnboardingScreen = ({ navigation }: { navigation: any }) => {
  return (
    <SafeAreaProvider>
      <OnboardingContent navigation={navigation} />
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: verticalScale(60),
    paddingHorizontal: scale(24),
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    height: verticalScale(144),
    alignItems: "center",
  },
  dotsCss: {
    height: verticalScale(65),
    paddingTop: verticalScale(25),
  },
  infoText: {
    height: verticalScale(65),
    width: verticalScale(232),
    textAlign: "center",
  },
});

export default OnboardingScreen;
