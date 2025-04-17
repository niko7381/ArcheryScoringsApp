// src/screens/HomeScreen.tsx
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import HomeScreenStyles from './HomeScreenStyles'

interface HomeScreenProps {
  navigation: any;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View style={HomeScreenStyles.container}>
      <Text style={HomeScreenStyles.title}>Hello World!</Text>
      <Text style={HomeScreenStyles.subtitle}>Firebase + React Native + TypeScript</Text>

      <TouchableOpacity style={HomeScreenStyles.button}
        onPress={() => {
          console.log("Button pressed!");
        }}
      >
      <Text style={HomeScreenStyles.buttonText}>Test Button</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
