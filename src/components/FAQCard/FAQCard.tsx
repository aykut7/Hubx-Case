import EsText from "components/EsText/EsText";
import { width } from "../../constants/index";
import React from "react";
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { scaledFont, verticalScale } from "@/utils/scale";

const ITEM_MARGIN = 8;
const ITEM_WIDTH = width * 0.6; // Slider hissi için genişlik ayarladık

type CardItem = {
  id: number;
  subtitle: string;
  title?: string;
  image?: any;
  image_uri?: string;
};

type CardListProps = {
  data?: CardItem[];
};

const FAQCard: React.FC<CardListProps> = ({ data }) => {
  const renderItem = ({ item }: { item: CardItem }) => (
    <View style={styles.card}>
      <ImageBackground
        source={{ uri: item.image_uri }}
        style={styles.cardImage}
        imageStyle={styles.imageStyle}
      >
        <View style={styles.textContainer}>
          <EsText style={styles.cardTitle} numberOfLines={2}>
            {item.title}
          </EsText>
          <EsText numberOfLines={1} style={styles.cardSubtitle}>
            {item.subtitle}
          </EsText>
        </View>
      </ImageBackground>
    </View>
  );

  return (
    <>
      <EsText size={scaledFont(15)} weight={500} style={styles.faqTitle}>
        Get Started
      </EsText>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </>
  );
};

export default FAQCard;

const styles = StyleSheet.create({
  card: {
    width: ITEM_WIDTH,
    marginRight: ITEM_MARGIN,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  cardImage: {
    width: "100%",
    height: 160,
    justifyContent: "flex-end",
  },
  imageStyle: {
    resizeMode: "cover",
  },
  textContainer: {
    backgroundColor: "rgba(0,0,0,0.4)",
    padding: 12,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#fff",
  },
  cardSubtitle: {
    fontSize: 12,
    color: "#ddd",
    marginTop: 6,
  },
  faqTitle: {
    marginBottom: verticalScale(16),
    marginTop: verticalScale(24),
  },
});
