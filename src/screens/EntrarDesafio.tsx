import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";
import { desafioService } from "../service/desafioService";
import { useNavigation } from "@react-navigation/native";

export function EntrarDesafio() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 3 }}>
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
            marginTop: 40,
          }}
          onPress={() => {
            desafioService.criarUsuario(3, "pedra");
            navigation.navigate("Home");
          }}
        >
          <Image
            style={styles.imagem}
            source={require("../assets/pedra.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
          }}
          onPress={() => {
            desafioService.criarUsuario(3, "papel");
            navigation.navigate("Home");
          }}
        >
          <Image
            style={styles.imagem}
            source={require("../assets/papel.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
          }}
          onPress={() => {
            desafioService.criarUsuario(3, "tesoura");
            navigation.navigate("Home");
          }}
        >
          <Image
            style={styles.imagem}
            source={require("../assets/tesoura.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
