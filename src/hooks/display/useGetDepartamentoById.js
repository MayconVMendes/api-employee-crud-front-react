import axios from "axios";

export default function useGetDepartamentoById() {

  async function displayDepartamentoById(id) {
    let url = `http://localhost:4000/departamentos/${id}`;
      const response = await axios.get(url);
      return response.data;
  }

  return {
    displayDepartamentoById,
  };
}
