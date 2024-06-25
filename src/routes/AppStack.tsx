import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/HomeScreen";
import { SettingScreen } from "../screens/Settings";
import { CreateDesaio } from "../screens/CreateDesaio";
import { ListarDesafio } from "../screens/ListarDesafio";
import { AceitarDesafio } from "../screens/AceitarDesafio";

// interface App

export interface AppParamList {
  Home: undefined;
  Settings: undefined;
}
const Stack = createNativeStackNavigator();

export function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Settings" component={SettingScreen} />
      <Stack.Screen name="Create" component={CreateDesaio} />
      <Stack.Screen name="AceitarDesafio" component={AceitarDesafio} />
      <Stack.Screen name="ListarDesafios" component={ListarDesafio} />
    </Stack.Navigator>
  );
}
