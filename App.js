import "react-native-gesture-handler";
import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
//import { createStackNavigator } from "@react-navigation/stack";
import BookScreen from "./screens/BookScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import CreateBookScreen from "./screens/CreateBookScreen";
import RecipeScreen from "./screens/RecipeScreen";
import CreateRecipeScreen from "./screens/CreateRecipeScreen";


//const Stack = createStackNavigator();

const globalScreenOptions = {
  headerStyle: { backgroundColor: "#D9D9D9" },
  headerTitleStyle: { color: "white" },
  headerTintColor: "white",
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Book" component={BookScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="CreateBookScreen" component={CreateBookScreen} />
        <Stack.Screen name="CreateRecipeScreen" component={CreateRecipeScreen} />
        <Stack.Screen name="RecipeScreen" component={RecipeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
