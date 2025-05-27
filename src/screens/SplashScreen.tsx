import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { isOnboardingDone } from "utils/onboardingStorage";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";
import { fetchFaqs } from "@/store/slices/faqSlice";
import { useDispatch } from "react-redux";
import { fetchCategories } from "@/store/slices/categoriesSlices";

type SplashScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Splash"
>;
const SplashScreen = () => {
  const nav = useNavigation<SplashScreenNavigationProp>();
  const dispatch = useDispatch<typeof import("@/store/store").store.dispatch>();
  useEffect(() => {
    const checkOnboarding = async () => {
      const done = await isOnboardingDone();
      if (done) {
        nav.replace("PaywallScreen");
      } else {
        nav.replace("Onboarding");
      }
    };
    checkOnboarding();
  }, []);
  useEffect(() => {
    dispatch(fetchFaqs());
    dispatch(fetchCategories());
  }, [dispatch]);
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default SplashScreen;
