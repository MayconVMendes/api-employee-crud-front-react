import axios from "axios";

export default function useCreateProjeto() {
  async function createProjeto(nome, dataInicio, dataFim, funcionarios) {
    let url = `http://localhost:4000/projetos`;
    const response = await axios.post(url, {
      nome: nome,
      dataInicio: dataInicio,
      dataFim: dataFim,
      funcionarios: [funcionarios]
    });
    return response.data;
  }

  return {
    createProjeto,
  };
}
