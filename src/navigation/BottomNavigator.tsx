import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Platform, Image } from "react-native";
import HomeScreen from "screens/HomeScreen";
import CustomTabBarButton from "components/CustomTabBarButton/CustomTabBarButton";
import EsText from "components/EsText/EsText";
import TabItem from "../components/TabItem";
import { height } from "../constants/index";
import OtherScreen from "@/screens/OtherScreen";
// import HealthcareIcon from "../assets/icons/healthcare 1.svg";

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        tabBarStyle: styles.tabBar,
        headerShown: false,
      }}
    >
      <Tab.Screen
        {...TabItem({
          name: "Home",
          component: HomeScreen,
          icon: require("../assets/images/homeIcon.png"),
          label: "Home",
          customHeight: 25,
        })}
      />

      <Tab.Screen
        {...TabItem({
          name: "Diagnose",
          component: OtherScreen,
          icon: require("../assets/images/healtIcon.png"),
          label: "Diagnose",
          customHeight: 25,
        })}
      />

      <Tab.Screen
        name="Scan"
        component={OtherScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../assets/images/scanIcon.png")}
              style={{
                height: height * 0.038,
                tintColor: "#fff",
              }}
              resizeMode="contain"
            />
          ),
          tabBarLabel: () => null,
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="MyGarden"
        component={OtherScreen}
        options={{
          ...TabItem({
            name: "MyGarden",
            component: OtherScreen,
            icon: require("../assets/images/gardenIcon.png"),
            label: "My Garden",
            customHeight: 25,
          }).options,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={OtherScreen}
        options={{
          ...TabItem({
            name: "Profile",
            component: OtherScreen,
            icon: require("../assets/images/userIcon.png"),
            label: "Profile",
            customHeight: 25,
          }).options,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tabBar: {
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
});

export default BottomTabNavigator;
