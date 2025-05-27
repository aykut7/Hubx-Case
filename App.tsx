import React from "react";
import AppNavigator from "./src/navigation/AppNavigator";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
const App = () => {
  const [fontsLoaded] = useFonts({
    "Rubik-Light": require("./src/assets/fonts/Rubik-Light.ttf"),
    "Rubik-Regular": require("./src/assets/fonts/Rubik-Regular.ttf"),
    "Rubik-Medium": require("./src/assets/fonts/Rubik-Medium.ttf"),
    "Rubik-SemiBold": require("./src/assets/fonts/Rubik-SemiBold.ttf"),
    "Rubik-Bold": require("./src/assets/fonts/Rubik-Bold.ttf"),
    "Rubik-ExtraBold": require("./src/assets/fonts/Rubik-ExtraBold.ttf"),
    "Rubik-Black": require("./src/assets/fonts/Rubik-Black.ttf"),

    "VisbyCF-Regular": require("./src/assets/fonts/Fontspring-DEMO-visbycf-regular.otf"),
    "VisbyCF-Medium": require("./src/assets/fonts/Fontspring-DEMO-visbycf-medium.otf"),
    "VisbyCF-SemiBold": require("./src/assets/fonts/Fontspring-DEMO-visbycf-demibold.otf"),
    "VisbyCF-Bold": require("./src/assets/fonts/Fontspring-DEMO-visbycf-bold.otf"),
    "VisbyCF-ExtraBold": require("./src/assets/fonts/Fontspring-DEMO-visbycf-extrabold.otf"),
    "VisbyCF-Black": require("./src/assets/fonts/Fontspring-DEMO-visbycf-heavy.otf"),
  });

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
