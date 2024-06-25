import React, { Fragment, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";
import { desafioService } from "../service/desafioService";
import Desafio from "../model/desafioModel";
import { useNavigation } from "@react-navigation/native";
export function ListarDesafio() {
  const [listaDeDesafios, setlistaDeDesafios] = useState<Desafio[]>([]);
  desafioService.findAllAtivos().then((res) => {
    setlistaDeDesafios(res);
  });
  const navigation = useNavigation();
  return (
    <Fragment>
      <View>
        <FlatList
          data={listaDeDesafios}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 20,
                }}
                onPress={() => {
                  navigation.navigate("AceitarDesafio");
                }}
              >
                <Text>{item.nome}</Text>
                <Image
                  style={styles.imagem}
                  source={require("../assets/joken.jpg")}
                />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </Fragment>
  );
}
