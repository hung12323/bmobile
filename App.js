import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboarding from "./src/Onboarding";
import Landingscr from "./src/Landingscr";
import Signin from "./src/Signin";
import Signupscr from "./src/Signupscr";
import HomeScr from "./src/HomeScr";
//import Menu from "./src/Menu";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        {/* <Stack.Navigator initialRouteName="Onboarding" screenOptions={{headerShown:false}}></Stack.Navigator> */}
        {/* <Stack.Navigator initialRouteName="HomeScr" screenOptions={{headerShown:false}}> */}
      <Stack.Navigator >
      <Stack.Screen name="Onboarding" component={Onboarding}  />
        <Stack.Screen name="Landingscr" component={Landingscr} />
        <Stack.Screen name="Signin" component={Signin} /> 
        <Stack.Screen name="Signupscr" component={Signupscr} /> 
        <Stack.Screen name="HomeScr" component={HomeScr} /> 
        {/* <Stack.Screen name="Menu" component={Menu} />  */}
      </Stack.Navigator>

    </NavigationContainer>
  );
}