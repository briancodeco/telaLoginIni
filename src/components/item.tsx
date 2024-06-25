import React, { Fragment } from "react";
import { styles } from "./styles";
import { ScrollView, View, Text, Image, TouchableOpacity } from "react-native";
export default function item(props) {
  return (
    <View>
      <TouchableOpacity
        style={{
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
        }}
        key={props.index}
        onPress={() => {}}
      >
        <Text>Id Desafio:{props.id}</Text>
        <Text>Id Criador:{props.esolhaDoUsuarioCriador}</Text>
        <Text>Id Criador:{props.escolhaDoUsuarioAceitou}</Text>
        <Image style={styles.imagem} source={require("../assets/joken.jpg")} />
      </TouchableOpacity>
    </View>
  );
}
