import React from "react";
import { Image } from "react-native";
import { View } from "react-native";
import styles from "./ExtraStepScreen.styles";
import EsText from "@/components/EsText/EsText";
const ExtraStepScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topTextContainer}>
        <View style={styles.topText}>
          <EsText
            size={28}
            weight={500}
            style={{
              letterSpacing: 0.07,
              textShadowColor: "rgba(0, 0, 0, 0.25)",
              textShadowOffset: { width: 0, height: 3 },
              textShadowRadius: 4,
            }}
          >
            Get plant
          </EsText>
          <EsText
            size={28}
            weight={800}
            style={{
              letterSpacing: 0.07,
              textShadowColor: "rgba(0, 0, 0, 0.25)",
              textShadowOffset: { width: 0, height: 3 },
              textShadowRadius: 4,
            }}
          >
            {""} care guides
          </EsText>
          <Image
            source={require("../../assets/images/Brush.png")}
            style={[styles.overlayImage, { top: 35, right: 10 }]}
          />
        </View>
      </View>
      <View style={styles.bodyImage}>
        <Image
          source={require("../../assets/images/Group 3.png")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
    </View>
  );
};

export default ExtraStepScreen;
