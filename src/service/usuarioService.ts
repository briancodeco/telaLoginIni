import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:3000/",
});
async function cadastrar(
  name: string,
  dateNasc: String,
  cpf: String,
  rg: String,
  username: string,
  password: string,
  email: string
) {
  fetch("http://localhost:3000/usuario", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      date_nasc: dateNasc,
      cpf: cpf,
      rg: rg,
      username: username,
      password: password,
      email: email,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.error("Erro Ao Criar Usuario:", error);
    });
}

export const usuarioService = {
  cadastrar,
};
