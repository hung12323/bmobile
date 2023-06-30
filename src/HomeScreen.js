import React from "react";
import { Button, View, Text } from "react-native";
//import Login from "./Login"
export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate("login")}
      />
    </View>
  );
}
