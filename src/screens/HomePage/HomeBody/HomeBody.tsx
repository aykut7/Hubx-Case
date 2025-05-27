import { Text, StyleSheet, ScrollView } from "react-native";
import React, { useEffect } from "react";
import PremiumCard from "components/PremiumCard/PremiumCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { fetchFaqs } from "@/store/slices/faqSlice";
import FAQCard from "components/FAQCard/FAQCard";
import CategoriesCard from "@/components/CategoriesCard/CategoriesCard";
import { fetchCategories } from "@/store/slices/categoriesSlices";
import EsText from "@/components/EsText/EsText";
import { scale } from "@/utils/scale";

export default function HomeBody() {
  const dispatch = useDispatch<typeof import("@/store/store").store.dispatch>();

  const faqList = useSelector((state: RootState) => state.faq.faq);
  const faqLoading = useSelector((state: RootState) => state.faq.loading);
  const faqError = useSelector((state: RootState) => state.faq.error);

  const categories = useSelector(
    (state: RootState) => state.categories.categories
  );
  const categoriesLoading = useSelector(
    (state: RootState) => state.categories.loading
  );
  const categoriesError = useSelector(
    (state: RootState) => state.categories.error
  );



  const loading = faqLoading || categoriesLoading;
  const error = faqError || categoriesError;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <PremiumCard onPress={() => console.log("Upgrade pressed!")} />

      {loading && <Text>Loading...</Text>}
      {error && <Text style={{ color: "red" }}>Error: {error}</Text>}

      {!loading && !error && (
        <>
          <FAQCard data={faqList} />
          <CategoriesCard categories={categories} />
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: scale(24),
  },
  scrollContent: {
    paddingBottom: 20,
  },
});
