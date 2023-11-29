import axios from "axios";

export default function useCreateFuncionario() {
  async function createFuncionario(
    nome,
    cpf,
    cargo,
    salario,
    departamentoId,
    projetos
  ) {
    let url = `http://localhost:4000/funcionarios`;
    const response = await axios.post(url, {
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
    createFuncionario,
  };
}
