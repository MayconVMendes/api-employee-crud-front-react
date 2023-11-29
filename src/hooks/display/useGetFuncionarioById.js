import axios from "axios";

export default function useGetFuncionarioById() {

  async function displayFuncionarioById(id) {
    let url = `http://localhost:4000/funcionarios/${id}`;
      const response = await axios.get(url);
      return response.data;
  }

  return {
    displayFuncionarioById,
  };
}
