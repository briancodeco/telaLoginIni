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
      cpf: "123.456.789-00",
      rg: 123456789,
      username: username,
      password: password,
      email: email,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        console.log(response);
        throw new Error("Erro ao criar usuário");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Usuário criado:", data);
    })
    .catch((error) => {
      console.error("Erro na requisição:", error);
    });
}
export const usuarioService = {
  cadastrar,
};
