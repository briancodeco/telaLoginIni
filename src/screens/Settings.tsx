import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MyButton } from "../components/MyButton";
import { useAuth } from "../contexts/Auth";
import { styles } from "./styles";

export function SettingScreen() {
  const { signOut } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações</Text>
      <TouchableOpacity style={{ backgroundColor: "red" }} onPress={signOut}>
        <Text style={styles.submitText2}> Sair do App</Text>
      </TouchableOpacity>
    </View>
  );
}
