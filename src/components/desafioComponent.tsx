import React, { Fragment } from "react";
import { styles } from "./styles";
import { ScrollView, View, Text, Image, TouchableOpacity } from "react-native";
export default function desafioComponent(props) {
  const id = props.id;
  const esolhaDoUsuarioCriador = props.esolhaDoUsuarioCriador;
  const escolhaDoUsuarioAceitou = props.escolhaDoUsuarioAceitou;
  const index = props.index;
  return (
    <View>
      <TouchableOpacity
        style={{
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
        }}
        key={index}
        onPress={() => {}}
      >
        <Text>Id Desafio:{id}</Text>
        <Text>Id Criador:{esolhaDoUsuarioCriador}</Text>
        <Text>Id Criador:{escolhaDoUsuarioAceitou}</Text>
        <Image style={styles.imagem} source={require("../assets/joken.jpg")} />
      </TouchableOpacity>
    </View>
  );
}
