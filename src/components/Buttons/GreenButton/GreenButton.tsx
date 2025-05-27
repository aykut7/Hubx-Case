import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

import { AppTheme, width } from "@/constants";
import { scale, scaledFont, verticalScale } from "@/utils/scale";
import EsText from "@/components/EsText/EsText";

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  style?: any;
}

const GreenButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  style,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, { width: scale(327) }, style]}
      onPress={onPress}
    >
      <EsText weight={500} size={scaledFont(16)} color={AppTheme.white}>
        {title}
      </EsText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: AppTheme.primary,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    minHeight: verticalScale(56),
    zIndex: 9999,
  },
});

export default GreenButton;
