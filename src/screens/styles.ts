import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 32,
  },
  title: {
    fontWeight: "bold",

    fontSize: 20,
    textAlign: "center",
  },
  coffText: {
    color: "#550AB1",
    fontWeight: "bold",
  },
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#191919",
  },
  containerLogo: {
    flex: 1,
    justifyContent: "center",
  },
  input: {
    backgroundColor: "#FFF",
    width: "90%",
    marginBottom: 15,
    color: "#222",
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
  },
  btnSubmit: {
    backgroundColor: "#00008b",
    color: "#F6F6F6",
    width: "90%",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
  },
  submitText: {
    color: "#FFF",
    fontSize: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  btnCadastrar: {
    marginTop: 10,
  },
  cadastrarText: {
    color: "#FFF",
  },
  submitText2: {
    color: "#000000",
    fontSize: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  imagem: {
    width: 170,
    height: 125,
    backgroundColor: "#007bff", // Cor de fundo do botão
    borderColor: "black", // Cor da borda
    borderTopWidth: 0, // Espessura da borda superior
    borderLeftWidth: 2, // Espessura da borda esquerda
    borderRightWidth: 2, // Espessura da borda direita
    borderBottomWidth: 0, // Sem borda inferior
    padding: 20,
  },
});
