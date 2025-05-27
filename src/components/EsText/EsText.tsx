import React from "react";
import { Text, TextProps, TextStyle } from "react-native";

type FontWeight = 300 | 400 | 500 | 600 | 700 | 800 | 900;
type FontFamily = "rubik" | "visby";

interface EsTextProps extends TextProps {
  children: React.ReactNode;
  size?: number;
  weight?: FontWeight;
  color?: string;
  font?: FontFamily;
  style?: any;
}

const EsText: React.FC<EsTextProps> = ({
  children,
  size = 14,
  weight = 400,
  color = "black",
  font = "rubik",
  style,
  ...props
}) => {
  const getFontFamily = (font: FontFamily, weight: FontWeight) => {
    const weightMap = {
      300: "Light",
      400: "Regular",
      500: "Medium",
      600: "SemiBold",
      700: "Bold",
      800: "ExtraBold",
      900: "Black",
    };
    const fontPrefix = font === "visby" ? "VisbyCF" : "Rubik";
    return `${fontPrefix}-${weightMap[weight] || "Regular"}`;
  };

  return (
    <Text
      style={[
        {
          fontFamily: getFontFamily(font, weight),
          fontSize: size,
          color,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

export default EsText;
