import axios from "axios";
const API_URL = "http://localhost:3000"; // URL base do seu backend
export interface AuthData {
  token: string;
  email: string;
  id: number;
}

export async function signIn(
  email: string,
  password: string
): Promise<AuthData> {
  try {
    const response = await axios.post<{
      msg: string;
      authData: AuthData;
    }>(
      `${API_URL}/usuario/autenticar`,
      { email, password }, // Certifique-se de enviar email e password como JSON
      {
        headers: {
          "Content-Type": "application/json", // Garanta que o cabeçalho content-type seja definido como application/json
        },
      }
    );
    const { authData } = response.data;
    console.log("Received AuthData:", authData);
    return authData;
  } catch (error) {
    console.error("Erro ao autenticar usuário:", error);
    throw error; // Tratar o erro conforme necessário na sua aplicação
  }
}
function createAuthData(token: string, email: string, id: number): AuthData {
  return {
    token,
    email,
    id,
  };
}
export const authService = {
  signIn,
};

const JWTTokenMock =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ikx1Y2FzIEdhcmNleiIsImlhdCI6MTUxNjIzOTAyMn0.oK5FZPULfF-nfZmiumDGiufxf10Fe2KiGe9G5Njoa64";
