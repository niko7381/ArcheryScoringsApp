import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";

type TabParamList = {
  Home: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const RootNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = "home";

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#4285F4",
        tabBarInactiveTintColor: "gray",
        headerShown: true,
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Hello World" }}
      />
    </Tab.Navigator>
  );
};

export default RootNavigator;
