import Desafio from "../model/desafioModel";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface AuthData {
  token: string;
  email: string;
  id: number;
}
async function findId() {
  const authDataSerialized = await AsyncStorage.getItem("@AuthData");
  if (authDataSerialized) {
    //If there are data, it's converted to an Object and the state is updated.
    const _authData: AuthData = JSON.parse(authDataSerialized);
    console.log(_authData.id);
    return _authData.id;
  }
}

const api = axios.create({
  baseURL: "",
});

async function findAllAtivos() {
  return buscarDesafios();
}
async function criarDesafio(
  escolhaDoUsuarioCriador: string,
  valorDaAposta: number
) {
  const id = await findId();
  const resposta = await axios.post("http://localhost:3000/desafio/create", {
    id,
    escolhaDoUsuarioCriador,
    valorDaAposta,
  });
  console.log(resposta.data);
}
async function buscarDesafios(): Promise<Desafio[]> {
  let lista: Desafio[];
  try {
    const resposta = await axios.get("http://localhost:3000/buscarDesafios");
    lista = resposta.data as Desafio[];
    return lista;
  } catch (error) {
    console.error("Erro ao buscar desafios:", error);
    return [];
  }
}

export const desafioService = {
  findAllAtivos,
  criarDesafio,
  findId,
};
