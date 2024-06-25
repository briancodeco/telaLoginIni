import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SignInScreen } from "../screens/SignInScreen/SignInScreen";
import { CriarUsuarioScreen } from "../screens/CriarUsuarioScreen";

const Stack = createNativeStackNavigator();

export function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="CriarUsuario" component={CriarUsuarioScreen} />
    </Stack.Navigator>
  );
}
