import axios from "axios";

export default function useDeleteFuncionario() {

  async function deleteFuncionario(id) {
    let url = `http://localhost:4000/funcionarios/${id}`;
      const response = await axios.delete(url);
      return response.data;
  }

  return {
    deleteFuncionario,
  };
}
