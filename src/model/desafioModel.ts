export default interface Desafio {
  id: number;
  idCriador: number;
  esolhaDoUsuarioCriador: string;
  escolhaDoUsuarioAceitou?: string;
  idDesafiante?: number;
  resultado: string;
  nome: string;
}
