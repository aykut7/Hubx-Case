import React, { useState } from "react";
import { ActivityIndicator, Image } from "react-native";
import { View } from "react-native";
import { styles } from "./GetStartedScreen.styles";
import EsText from "@/components/EsText/EsText";
const GetStartedScreen = () => {
  const [loading, setLoading] = useState<boolean>(true);
  return (
    <>
      <View style={styles.topTextContainer}>
        <View style={styles.topText}>
          <EsText size={28} weight={400} style={{ letterSpacing: 0.07 }}>
            Welcome to
          </EsText>
          <EsText size={28} weight={700} style={{ letterSpacing: 0.07 }}>
            {" "}
            PlantApp
          </EsText>
        </View>
        <View style={styles.topText2}>
          <EsText
            size={16}
            weight={400}
            color="#13231BB2"
            style={{ lineHeight: 22, letterSpacing: 0.07 }}
          >
            Identify more than 3000+ plants and 88% accuracy.
          </EsText>
        </View>
      </View>
      <View style={styles.bodyImage}>
        {loading && (
          <ActivityIndicator
            size="large"
            color="#32CD32"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              marginLeft: -12,
              marginTop: -12,
            }}
          />
        )}
        <Image
          source={require("../../assets/images/image copy 4.png")}
          resizeMode="cover"
          style={styles.image}
          onLoadEnd={() => setLoading(false)}
        />
      </View>
    </>
  );
};

export default GetStartedScreen;
