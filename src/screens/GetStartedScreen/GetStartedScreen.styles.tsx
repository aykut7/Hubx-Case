import { scale, verticalScale } from "@/utils/scale";
import { width } from "../../constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  topTextContainer: {
    width: "100%",
  },
  topText: {
    flexDirection: "row",
  },
  bodyImage: {
    paddingTop: 24,
    width: "100%",
    alignItems: "center",
  },
  image: {
    width: scale(375),
    height: verticalScale(499),
  },
  topText2: {
    marginTop: 8,
    width: width * 0.7,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },

  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 30,
  },
  imageContainer: {
    width: "100%",
    aspectRatio: 1, // Resmin genişliği yükseklikle aynı olacak
    overflow: "hidden",
    borderRadius: 10,
    marginBottom: 20,
  },

  buttonContainer: {
    width: "100%",
    paddingHorizontal: 20,
  },
  footer: {
    marginTop: 20,
  },
  footerText: {
    fontSize: 12,
    color: "#999",
    textAlign: "center",
  },
});
