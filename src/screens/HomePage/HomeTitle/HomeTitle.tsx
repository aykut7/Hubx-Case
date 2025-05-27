import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import EsText from "components/EsText/EsText";
import Layout from "components/Layout/Layout";
import SearchInput from "components/SearchInput/SearchInput";
import { height } from "../../../constants/index";
import { ImageBackground } from "react-native";
import { scale, verticalScale } from "@/utils/scale";

export default function HomeTitle() {
  const [search, setSearch] = useState("");
  return (
    <Layout style={[styles.container]}>
      <ImageBackground
        source={require("@/assets/images/Header.png")}
        style={styles.haderBg}
        resizeMode="cover"
      />
      <EsText size={16} weight={400}>
        Hi, plant lover!
      </EsText>
      <EsText size={24} weight={500} style={{ lineHeight: 28, marginTop: 6 }}>
        Good Afternoon! ⛅
      </EsText>
      <View style={styles.searchInput}>
        <SearchInput
          value={search}
          onChangeText={setSearch}
          placeholder="Search for plants"
        />
      </View>
    </Layout>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(246, 246, 246, 1)",

    marginBottom: verticalScale(24),
  },
  searchInput: {
    marginTop: verticalScale(14),
    marginBottom: verticalScale(24)
  },
  haderBg: {
    width: scale(375),
    height: verticalScale(140),
    position: "absolute",
  },
});
