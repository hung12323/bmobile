import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import landingscr from "./src/landingscr";
import signin from "./src/signin";

import signupscr from "./src/signupscr";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      
        <Stack.Screen name="landingscr" component={landingscr} />
        <Stack.Screen name="signin" component={signin} /> 
        <Stack.Screen name="signupscr" component={signupscr} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}