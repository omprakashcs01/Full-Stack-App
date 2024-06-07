import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "../screens/auth/Register";
import Login from "../screens/auth/Login";
import Home from "../screens/Home";

const Stack = createNativeStackNavigator();
const ScreenMenu = () => {
  //global state

  // const [state] = useContext(AuthContext);
  // //auth condition

  // const realUserAuth = state?.user && state?.token;
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default ScreenMenu;

const styles = StyleSheet.create({});
