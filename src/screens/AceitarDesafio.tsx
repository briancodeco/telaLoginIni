import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";

export function AceitarDesafio() {
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
          onPress={() => {}}
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
          onPress={() => {}}
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
          onPress={() => {}}
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
