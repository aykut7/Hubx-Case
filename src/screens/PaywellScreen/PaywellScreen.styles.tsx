import { scale } from "@/utils/scale";
import { height } from "../../constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: height * 0.33,
  },
  contentContainer: {
    marginBottom: scale(10),
  },
  closeButton: {
    position: "absolute",
    top: 60,
    right: 19,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#00000066",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
  closeButtonText: {
    fontSize: 24,
    color: "#fff",
  },

  topText: {
    flexDirection: "row",
    alignItems: "center",
  },
  priceOption: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 14,
    backgroundColor: "#222",
    marginTop: 20,
    borderWidth: 2,
    borderColor: "#222",
  },
  priceOptionActive: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: "#28AF6E",
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 24,
    backgroundColor: "#2F3A35",
    justifyContent: "center",
    alignItems: "center",
    marginRight: scale(12),
  },
  circleActive: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#28AF6E",
    justifyContent: "center",
    alignItems: "center",
    marginRight: scale(16),
  },

  buttonContainer: {
    marginTop: scale(26),
  },

  settingsContainer: {
    marginTop: scale(20),
  },
});

export default styles;
