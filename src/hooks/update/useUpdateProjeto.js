import axios from "axios";

export default function useUpdateProjeto() {
  async function updateProjeto(id, nome, dataInicio, dataFim, funcionarios) {
    let url = `http://localhost:4000/projetos/${id}`;
    const response = await axios.put(url, {
      nome: nome,
      dataInicio: dataInicio,
      dataFim: dataFim,
      funcionarios: [funcionarios],
    });
    return response.data;
  }

  return {
    updateProjeto,
  };
}
