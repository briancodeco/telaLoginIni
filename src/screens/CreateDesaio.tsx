import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";
import { desafioService } from "../service/desafioService";
import { useNavigation } from "@react-navigation/native";

export function CreateDesaio() {
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
            desafioService.criarDesafio("pedra", 60);
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
            desafioService.criarDesafio("papel", 60);
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
            desafioService.criarDesafio("tesoura", 60);
            navigation.navigate("Home");
          }}
        >
          <Image
            style={styles.imagem}
            source={require("../assets/tesoura.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
          }}
          onPress={() => {
            desafioService.findId();
          }}
        >
          <text>Teste</text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
