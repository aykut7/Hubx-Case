// components/GetStartedScreen/GetStartedScreen.styles.ts
import { scale } from "@/utils/scale";
import { height, width } from "../../constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: height * 0.77,
  },
  topTextContainer: {
    width: width * 0.8,
  },
  topText: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  bodyImage: {
    alignItems: "center",
  },

  overlayImage: {
    position: "absolute",
  },
  image: {
    width: scale(375),
    height: scale(670),
  },
});

export default styles;
