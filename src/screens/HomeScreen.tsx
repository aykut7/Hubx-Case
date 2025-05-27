import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import HomeTitle from "@/screens/HomePage/HomeTitle/HomeTitle";
import HomeBody from "@/screens/HomePage/HomeBody/HomeBody";
import { verticalScale } from "@/utils/scale";
const HomeScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container]}>
      <HomeTitle />
      <HomeBody />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: verticalScale(56),
    backgroundColor: "rgba(246, 246, 246, 1)",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default HomeScreen;
