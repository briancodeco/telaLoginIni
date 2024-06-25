import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { MyButton } from "../components/MyButton";
import { styles } from "./styles";

export function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Essa tela só pode ser vista por usuários autenticados
      </Text>
      <TouchableOpacity
        style={styles.btnSubmit}
        onPress={() => navigation.navigate("Create")}
      >
        <Text style={styles.submitText}>Criar um Desafio</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnSubmit}
        onPress={() => navigation.navigate("ListarDesafios")}
      >
        <Text style={styles.submitText}>Listar Desafios</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnSubmit}
        onPress={() => navigation.navigate("Settings")}
      >
        <Text style={styles.submitText}> Ir para Configurações</Text>
      </TouchableOpacity>
      <Text>
        by <Text style={styles.coffText}>CO2LAB</Text>
      </Text>
    </View>
  );
}
