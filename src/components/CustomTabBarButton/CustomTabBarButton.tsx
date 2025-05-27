import React, { ReactNode } from "react";
import { TouchableOpacity, View, GestureResponderEvent } from "react-native";

interface CustomTabBarButtonProps {
  children: ReactNode;
  onPress?: (event: GestureResponderEvent) => void;
}

const CustomTabBarButton: React.FC<CustomTabBarButtonProps> = ({
  children,
  onPress,
}) => (
  <TouchableOpacity
    style={{
      top: -30,
      justifyContent: "center",
      alignItems: "center",
    }}
    onPress={onPress}
  >
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: "rgba(40, 175, 110, 1)",
borderWidth: 4,
borderColor: "#rgba(44, 204, 128, 1)",
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
     
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
);

export default CustomTabBarButton;
