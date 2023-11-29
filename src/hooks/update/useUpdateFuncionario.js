import axios from "axios";

export default function useUpdateFuncionario() {
  async function updateFuncionario(
    id,
    nome,
    cpf,
    cargo,
    salario,
    departamentoId,
    projetos
  ) {
    let url = `http://localhost:4000/funcionarios/${id}`;
    const response = await axios.put(url, {
      nome: nome,
      cpf: cpf,
      cargo: cargo,
      salario: salario,
      departamentoId: departamentoId,
      projetos: projetos,
    });
    return response.data;
  }

  return {
    updateFuncionario,
  };
}
