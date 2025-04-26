import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/Login/LoginScreen";
import SignupScreen from "../screens/Signup/SignupScreen";
import HomeScreen from "../screens/Home/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ScoreingOverviewScreen from "../screens/Scoring/ScoreingOverviewScreen";
import SpecSaverOverviewScreen from "../screens/SpecSaver/SpecSaverOverviewScreen";

export type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  Home: undefined; // dette er din tab navigator
};

export type TabParamList = {
  Home: undefined;
  Scoreing: undefined;
  Specifications: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>()

function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name="Scoreing" component={ScoreingOverviewScreen} />
      <Tab.Screen name="Specifications" component={SpecSaverOverviewScreen} />
    </Tab.Navigator>
  )
}

function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{
      headerStyle: {
        backgroundColor: "blue"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      },
      headerTitleAlign: "center",
    }}>
      <Stack.Screen name="Login" component={LoginScreen} options={{
        title: "Welcome",
      }}/>
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Home" component={HomeTabs} options={{
        title: "ArcheryBuddy",
        headerBackVisible: false
      }} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
