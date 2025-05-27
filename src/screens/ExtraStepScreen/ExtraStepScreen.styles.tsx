// components/GetStartedScreen/GetStartedScreen.styles.ts
import { scale, verticalScale } from "@/utils/scale";
import { height, width } from "../../constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  topTextContainer: {
    width: width * 0.8,
  },
  topText: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  bodyImage: {
    height: "100%",
    alignItems: "center",
    marginTop: verticalScale(63),
    justifyContent: "center",
  },
  overlayImage: {
    position: "absolute",
  },
  image: {
    width: scale(375),
    height: verticalScale(703),
  },
});

export default styles;
