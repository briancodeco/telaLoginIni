import Desafio from "../model/desafioModel";
import axios from "axios";
const api = axios.create({
  baseURL: "",
});

async function findAllAtivos() {
  return buscarDesafios();
}
async function criarUsuario(id: number, escolhaDoUsuarioCriador: string) {
  const resposta = await axios.post("http://localhost:3000/desafio", {
    id,
    escolhaDoUsuarioCriador,
  });
  alert(resposta.data.message);
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
  criarUsuario,
};
