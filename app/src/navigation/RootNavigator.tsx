import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import SignupScreen from "../screens/SignupScreen/SignupScreen";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import { Background } from "@react-navigation/elements";

export type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  Home: undefined; // dette er din tab navigator
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} options={{
        title: "Login",
        headerStyle: {
          backgroundColor: "blue"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold"
        },
        headerTitleAlign: "center",
      }}/>
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Home" component={HomeScreen} options={{
        headerStyle: {
          backgroundColor: "blue",
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        title: "ArcheryBuddy",
        headerTitleAlign: "center",
        headerBackVisible: false
      }} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
