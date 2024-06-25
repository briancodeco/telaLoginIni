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

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="e-mail"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="data de nascimento"
        value={dateNasc}
        onChangeText={setDateNasc}
      />
      <TextInput
        style={styles.input}
        placeholder="cpf"
        value={cpf}
        onChangeText={setCpf}
      />
      <TextInput
        style={styles.input}
        placeholder="rg"
        value={rg}
        onChangeText={setRg}
      />
      <TextInput
        style={styles.input}
        placeholder="username"
        value={username}
        onChangeText={setUserName}
      />

      <TouchableOpacity
        style={styles.btnSubmit}
        onPress={() =>
          usuarioService.cadastrar(
            name,
            dateNasc,
            cpf,
            rg,
            username,
            password,
            email
          )
        }
      >
        <Text style={styles.submitText}>Criar</Text>
      </TouchableOpacity>
      <Text>
        by <Text style={styles.coffText}>CO2LAB</Text>
      </Text>
    </View>
  );
}
