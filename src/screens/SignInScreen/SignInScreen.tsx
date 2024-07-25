import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { useAuth } from "../../contexts/Auth";
import { useNavigation } from "@react-navigation/native";
export function SignInScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useAuth();
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Text style={styles.text}>CO2 JKP</Text>
        <Text style={styles.text}>Aposte na sua sorte</Text>
      </View>
      <View style={styles.container}>
        <View>
          <Text style={styles.identifyText}>Identifique-se</Text>
        </View>
        <View style={styles.containerInputs}>
          <TextInput
            style={styles.input}
            placeholder="Usuario"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            style={styles.btnSubmit}
            onPress={() => signIn(email, password)}
          >
            <Text style={styles.submitText}>Entrar</Text>
          </TouchableOpacity>
          <Text style={styles.identifyText}>
            ou use uma das suas redes sociais
          </Text>
          <View style={styles.vireRedeSociais}>
            <TouchableOpacity style={styles.Btntwitter} onPress={() => {}}>
              <Text style={styles.submitText}>Twitter</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnFacebook} onPress={() => {}}>
              <Text style={styles.submitText}>Facebook</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.vireRedeSociais}>
            <TouchableOpacity
              style={styles.btnCadastrar}
              onPress={() => {
                navigation.navigate("RecuperarSenha");
              }}
            >
              <Text style={styles.cadastrarText}>Esquece a senha ?</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnCadastrar}
              onPress={() => {
                navigation.navigate("CriarUsuario");
              }}
            >
              <Text style={styles.cadastrarTextNovo}>Cadastre-se</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  containerLogo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 10,
  },

  containerInputs: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 10,
  },
  input: {
    width: "80%", // Reduzindo a largura dos inputs
    height: 40, // Reduzindo a altura dos inputs
    backgroundColor: "#FFF",
    marginBottom: 15,
    marginTop: 15,
    color: "#222",
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
  },
  btnSubmit: {
    backgroundColor: "white",
    width: "80%", // Reduzindo a largura dos inputs
    height: 40, // Reduzindo a altura dos inputs
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    borderRadius: 15,
  },
  Btntwitter: {
    backgroundColor: "#1DA1F2",
    flex: 1, // Cada botão ocupará metade do espaço disponível no contêiner
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    borderRadius: 15,
    marginHorizontal: 5, // Adiciona espaço entre os botões
  },
  btnFacebook: {
    backgroundColor: "#3b5998",
    flex: 1, // Cada botão ocupará metade do espaço disponível no contêiner
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    borderRadius: 15,
    marginHorizontal: 5, // Adiciona espaço entre os botões
  },
  submitText: {
    color: "black",
    fontSize: 18,
  },
  btnCadastrar: {
    marginTop: 10,
  },
  cadastrarText: {
    color: "#FFF",
  },
  cadastrarTextNovo: {
    color: "red",
  },

  text: {
    fontSize: 20,
    color: "white",
  },
  identifyText: {
    marginBottom: 10, // Adicionando margem inferior para espaçamento
    fontSize: 20,
    color: "white",
  },
  vireRedeSociais: {
    flexDirection: "row", // Organiza os elementos filhos em linha
    justifyContent: "space-between", // Distribui espaço uniformemente entre os elementos
    width: "80%", // Define a largura para manter consistência com outros inputs
    marginTop: 20, // Adiciona espaço vertical entre este contêiner e outros elementos
    marginBottom: 20, // Espaço no fundo, se necessário
    alignSelf: "center", // Centraliza no eixo horizontal da tela
  },
  btnCadastros: {
    flexDirection: "row", // Alteração para organizar os botões na horizontal
    marginTop: 10,
    marginHorizontal: 30,
    marginLeft: 10,
  },
});
