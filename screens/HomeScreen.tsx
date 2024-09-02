import React from "react";
import { View, Text } from "react-native";
import HomeScreenStyles from "../styles/HomeScreenStyles";

const HomeScreen = () => {
  return (
    <View style={HomeScreenStyles.container}>
      <Text style={HomeScreenStyles.title}>Welcome to Heightful</Text>
    </View>
  );
};

export default HomeScreen;
