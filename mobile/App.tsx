import { NavigationContainer } from "@react-navigation/native";
import BottomTabs from "./src/navigation/BottomTabs";
import * as NavigationBar from "expo-navigation-bar";
import { useEffect } from "react";
import { AppState } from "react-native";

export default function App() {
  useEffect(() => {
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
  }, []);

  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
}