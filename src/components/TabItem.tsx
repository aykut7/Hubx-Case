import React from "react";
import { Image } from "react-native";
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import EsText from "../components/EsText/EsText";
import { AppTheme, height } from "../constants";

interface TabItemProps {
  name: string;
  component: React.ComponentType<any>;
  icon: any;
  label: string;
  customHeight?: number;
}

const TabItem = ({
  name,
  component,
  icon,
  label,
  customHeight,
}: TabItemProps): {
  name: string;
  component: React.ComponentType<any>;
  options: BottomTabNavigationOptions;
} => ({
  name,
  component,
  options: {
    tabBarIcon: ({ focused }) => (
      <Image
        source={icon}
        style={{
          height: customHeight || height * 0.033,
          tintColor: focused ? AppTheme.primary : AppTheme.disableColor,
        }}
        resizeMode="contain"
      />
    ),
    tabBarLabel: ({ focused }) => (
      <EsText
        style={{
          color: focused ? AppTheme.primary : AppTheme.disableColor,
          fontSize: 12,
        }}
      >
        {label}
      </EsText>
    ),
  },
});

export default TabItem;
export type { TabItemProps };
