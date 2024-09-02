import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/navigation.types";
import { Ionicons } from "@expo/vector-icons";
import ProfileScreenStyles from "../styles/ProfileScreenStyles";

type ProfileScreenProps = NativeStackScreenProps<RootStackParamList, "Profile">;

const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigation }) => {
  return (
    <View style={ProfileScreenStyles.container}>
      <View style={ProfileScreenStyles.header}>
        <Text style={ProfileScreenStyles.title}>Profile</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <Ionicons name="settings-sharp" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={ProfileScreenStyles.profileInfo}>
        <Text style={ProfileScreenStyles.label}>Username:</Text>
        <Text style={ProfileScreenStyles.value}>JohnDoe</Text>
      </View>

      <View style={ProfileScreenStyles.profileInfo}>
        <Text style={ProfileScreenStyles.label}>Email:</Text>
        <Text style={ProfileScreenStyles.value}>johndoe@example.com</Text>
      </View>
    </View>
  );
};

export default ProfileScreen;
