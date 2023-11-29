import axios from "axios";

export default function useGetAllFuncionario() {

  async function displayAllFuncionario() {
    let url = `http://localhost:4000/funcionarios`;
      const response = await axios.get(url);
      return response.data;
  }

  return {
    displayAllFuncionario,
  };
}
