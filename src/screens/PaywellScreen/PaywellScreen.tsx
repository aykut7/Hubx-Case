import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  Image,
  StatusBar,
  FlatList,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "./PaywellScreen.styles";
import Layout from "components/Layout/Layout";
import EsText from "components/EsText/EsText";
import GreenButton from "components/Buttons/GreenButton/GreenButton";
import { BlurView } from "expo-blur";
import { width, height } from "../../constants";

const CARD_WIDTH = width * 0.7;
const CARD_SPACING = 10;
const CARD_WIDTHH = 156;
const CARD_HEIGHTT = 130;
const CARD_SPACINGG = 8;

const data = [
  {
    id: "1",
    title: "Unlimited",
    subtitle: "Plant Identify",
    icon: require("../../assets/images/scanner (1) 1.png"),
  },
  {
    id: "2",
    title: "Faster",
    subtitle: "Process",
    icon: require("../../assets/images/speedometer 1.png"),
  },
  {
    id: "3",
    title: "Detailed",
    subtitle: "Plant care",
    icon: require("../../assets/images/speedometer 1.png"),
  },
];

const PaywellScreen = ({ navigation }: { navigation: any }) => {
  const [selectedPlan, setSelectedPlan] = useState("1 Month");
  const handleClose = () => {
    navigation.replace("Home");
  };
  return (
    <View>
      <StatusBar translucent backgroundColor="transparent" />
      <ImageBackground
        source={require("../../assets/images/image copy 3.png")}
        style={{
          width: width,
          height: height,
        }}
      >
        <Layout style={styles.container}>
          <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
            <EsText style={styles.closeButtonText}>✕</EsText>
          </TouchableOpacity>

          <View style={styles.contentContainer}>
            <View style={styles.topText}>
              <EsText font="visby" weight={800} size={30} color="#fff">
                PlantApp{" "}
              </EsText>
              <EsText font="visby" weight={500} size={24} color="#fff">
                Premium{" "}
              </EsText>
            </View>
            <EsText weight={300} size={17} color="#fff">
              Access All Features
            </EsText>
          </View>

          <View style={{ marginTop: 10 }}>
            <FlatList
              data={data}
              horizontal
              showsHorizontalScrollIndicator={false}
              snapToInterval={CARD_WIDTH + CARD_SPACING}
              decelerationRate="fast"
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <BlurView
                  intensity={16}
                  style={{
                    width: CARD_WIDTHH,
                    height: CARD_HEIGHTT,
                    marginRight: CARD_SPACINGG,
                    borderRadius: 16,
                    overflow: "hidden",
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    padding: 16,
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "#0000003D",
                      borderRadius: 8,
                      width: 48,
                      height: 48,
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 12,
                    }}
                  >
                    <Image
                      source={item.icon}
                      style={{ width: 24, height: 24 }}
                    />
                  </View>

                  <Text
                    style={{
                      fontSize: 16,
                      color: "#fff",
                      fontWeight: "600",
                    }}
                  >
                    {item.title}
                  </Text>
                  <Text
                    style={{
                      fontSize: 13,
                      color: "#fff",
                      opacity: 0.8,
                    }}
                  >
                    {item.subtitle}
                  </Text>
                </BlurView>
              )}
            />
          </View>

          <View>
            <View>
              <TouchableOpacity
                style={[
                  styles.priceOption,
                  selectedPlan === "1 Month" && styles.priceOptionActive,
                ]}
                onPress={() => setSelectedPlan("1 Month")}
              >
                <View
                  style={[
                    styles.circleActive,
                    selectedPlan === "1 Month"
                      ? styles.circleActive
                      : styles.circle,
                  ]}
                >
                  {selectedPlan === "1 Month" && (
                    <MaterialIcons name="circle" size={8} color="#fff" />
                  )}
                </View>
                <View style={{ flexDirection: "column" }}>
                  <EsText size={16} weight={500} color="#fff">
                    1 Month
                  </EsText>
                  <EsText size={12} weight={300} color="#fff">
                    $2.99/month, auto renewable
                  </EsText>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.priceOption,
                  selectedPlan === "1 Year" && styles.priceOptionActive,
                  { position: "relative" },
                ]}
                onPress={() => setSelectedPlan("1 Year")}
              >
                <View
                  style={[
                    styles.circleActive,
                    selectedPlan === "1 Year"
                      ? styles.circleActive
                      : styles.circle,
                  ]}
                >
                  {selectedPlan === "1 Year" && (
                    <MaterialIcons name="circle" size={8} color="#fff" />
                  )}
                </View>
                <View style={{ flexDirection: "column" }}>
                  <EsText size={16} weight={500} color="#fff">
                    1 Year
                  </EsText>
                  <EsText size={12} weight={300} color="#fff">
                    First 3 days free, then $529,99/year
                  </EsText>
                </View>
                <EsText
                  size={14}
                  weight={500}
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    color: "#fff",
                    paddingHorizontal: 12,
                    paddingVertical: 4,
                    backgroundColor: "#28AF6E",
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 0,
                    borderBottomLeftRadius: 20,
                    lineheight: 18,
                  }}
                >
                  Save 50%
                </EsText>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <GreenButton
              title="Try free for 3 days"
              onPress={handleClose}
            ></GreenButton>
          </View>

          <View style={styles.settingsContainer}>
            <EsText
              size={9}
              color="rgba(255, 255, 255, 0.5)"
              weight={300}
              style={{ marginBottom: 8, lineHeight: 14, textAlign: "center" }}
            >
              After the 3-day free trial period you’ll be charged ₺274.99 per
              year unless you cancel before the trial expires. Yearly
              Subscription is Auto-Renewable
            </EsText>
          </View>
          <View>
            <EsText
              size={11}
              weight={400}
              color="rgba(255, 255, 255, 0.5)"
              style={{ textAlign: "center" }}
            >
              Terms • Privacy • Restore
            </EsText>
          </View>
        </Layout>
      </ImageBackground>
    </View>
  );
};

export default PaywellScreen;
