import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { scale, scaledFont } from "@/utils/scale";
import EsText from "../EsText/EsText";
import { AppTheme } from "@/constants";

const CARD_WIDTH = scale(158);
const CARD_HEIGHT = scale(152);
const CARD_MARGIN = scale(11); // kartlar arası boşluk

const cards = [
  { id: 1, title: "Kart 1" },
  { id: 2, title: "Kart 2" },
  { id: 3, title: "Kart 3" },
  { id: 4, title: "Kart 4" },
];

interface Category {
  id: number;
  title: string;
  image: {
    url: string;
  };
}

interface CategoriesCardProps {
  categories: Category[];
}

const CategoriesCard: React.FC<CategoriesCardProps> = ({ categories }) => {
  return (
    <View style={styles.container}>
      {categories.map((card, index) => {
        const isRightItem = index % 2 === 1;
        return (
          <View
            key={card.id}
            style={[
              styles.card,
              {
                marginRight: isRightItem ? 0 : CARD_MARGIN, // sadece soldaki karta marginRight ver
                marginBottom: CARD_MARGIN,
              },
            ]}
          >
            <EsText size={16} weight={500} style={styles.text}>
              {card.title}
            </EsText>
            <Image source={{ uri: card.image.url }} style={styles.image} />
          </View>
        );
      })}
    </View>
  );
};
export default CategoriesCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 0,
    marginTop: scale(16),
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    backgroundColor: AppTheme.white,
    borderRadius: scale(12),
    borderWidth: scale(0.5),
    borderColor: AppTheme.borderColor,
  },
  text: {
    color: AppTheme.black,
    fontSize: scaledFont(16),
    fontWeight: "600",
    textAlign: "left",
    padding: scale(16),
    width: scale(167) - scale(32),
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: scale(12),
    position: "absolute",
    top: 0,
    left: 0,
  },
});
