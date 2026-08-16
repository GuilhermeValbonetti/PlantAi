import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./src/navigation/StackNavigator";
import * as NavigationBar from "expo-navigation-bar";
import { useEffect } from "react";
import { AppState, Platform } from "react-native";

export default function App() {
  useEffect(() => {
    if (Platform.OS === "android") {
      const esconderBarra = async () => {
        await NavigationBar.setVisibilityAsync("hidden");
      };

      esconderBarra();

      const subscription = AppState.addEventListener("change", (state) => {
        if (state === "active") {
          esconderBarra();
        }
      });

      return () => subscription.remove();
    }
  }, []);

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}