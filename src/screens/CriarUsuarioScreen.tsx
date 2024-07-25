import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import { usuarioService } from "../service/usuarioService";

export function CriarUsuarioScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [dateNasc, setDateNasc] = useState("");
  const [cpf, setCpf] = useState("");
  const [rg, setRg] = useState("");
  const [username, setUserName] = useState("");
  const navigation = useNavigation();
  function cadastraUsuario(
    name: string,
    dateNasc: string,
    cpf: string,
    rg: string,
    username: string,
    password: string,
    email: string
  ) {
    usuarioService
      .cadastrar(name, dateNasc, cpf, rg, username, password, email)
      .then(() => {
        // Navega para a tela "Home" após o cadastro ser bem-sucedido
        navigation.navigate("SignIn");
      })
      .catch((error) => {
        // Lida com erros caso o cadastro falhe
        console.error("Erro ao cadastrar usuário:", error);
        // Você pode optar por exibir uma mensagem de erro ou realizar outras ações
      });
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="data de nascimento"
        value={dateNasc}
        onChangeText={setDateNasc}
      />
      <TextInput
        style={styles.input}
        placeholder="Dige seu CPF"
        value={cpf}
        onChangeText={setCpf}
      />
      <TextInput
        style={styles.input}
        placeholder="Dige seu RG"
        value={rg}
        onChangeText={setRg}
      />
      <TextInput
        style={styles.input}
        placeholder="username"
        value={username}
        onChangeText={setUserName}
      />
      <TextInput
        style={styles.input}
        placeholder="password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TextInput
        style={styles.input}
        placeholder="e-mail"
        value={email}
        onChangeText={setEmail}
      />

      <TouchableOpacity
        style={styles.btnSubmit}
        onPress={() => {
          cadastraUsuario(name, dateNasc, cpf, rg, username, password, email);
        }}
      >
        <Text style={styles.submitText}>Criar</Text>
      </TouchableOpacity>
      <Text>
        by <Text style={styles.coffText}>CO2LAB</Text>
      </Text>
    </View>
  );
}
