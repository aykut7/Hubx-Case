import React from "react";
import { Image } from "react-native";
import { View } from "react-native";
import styles from "./ContinueScreen.styles";
import EsText from "@/components/EsText/EsText";
const ContinueScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topTextContainer}>
        <View style={styles.topText}>
          <EsText size={28} weight={500} style={{ letterSpacing: -1 }}>
            Take a photo to
          </EsText>
          <EsText
            size={28}
            weight={800}
            style={{ letterSpacing: -1, position: "relative" }}
          >
            {" "}
            identify
          </EsText>
          <Image
            source={require("../../assets/images/Brush.png")}
            style={[styles.overlayImage, { top: 35, right: 10 }]}
          />
          <EsText size={28} weight={600} style={{ letterSpacing: -1 }}>
            {" "}
            the plant!
          </EsText>
        </View>
      </View>
      <View style={styles.bodyImage}>
        <Image
          source={require("../../assets/images/Content copy.png")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
    </View>
  );
};

export default ContinueScreen;
