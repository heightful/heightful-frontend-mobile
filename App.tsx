import React, { useEffect, useContext } from "react";
import * as SplashScreen from "expo-splash-screen";
import RootNavigator from "./navigation/RootNavigator";
import { AuthProvider } from "./contexts/AuthContext";

SplashScreen.preventAutoHideAsync();

export default function App() {
  useEffect(() => {
    const prepare = async () => {
      try {
        await SplashScreen.hideAsync();
      } catch (e) {
        console.warn("An error occurred while preparing the app:", e);
      }
    };

    prepare();
  }, []);

  return (
    <AuthProvider>
      <RootNavigator />
    </AuthProvider>
  );
}
