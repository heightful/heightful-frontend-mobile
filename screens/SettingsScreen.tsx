import React, { useContext } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/navigation.types";
import SettingsScreenStyles from "../styles/SettingsScreenStyles";
import { AuthContext } from "../contexts/AuthContext";

type SettingsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Settings"
>;

const SettingsScreen: React.FC<SettingsScreenProps> = ({ navigation }) => {
  const { contextLogout } = useContext(AuthContext);

  const handleLogoutPress = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to log out?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: handleLogout,
        },
      ],
      { cancelable: true }
    );
  };

  const handleLogout = async () => {
    await contextLogout();
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  };

  return (
    <View style={SettingsScreenStyles.container}>
      <Text style={SettingsScreenStyles.title}>Settings</Text>

      <TouchableOpacity
        style={SettingsScreenStyles.logoutButton}
        onPress={handleLogoutPress}
      >
        <Text style={SettingsScreenStyles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingsScreen;
