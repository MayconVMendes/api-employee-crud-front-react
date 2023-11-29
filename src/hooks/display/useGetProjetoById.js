import axios from "axios";

export default function useGetProjetosById() {

  async function displayProjetosById(id) {
    let url = `http://localhost:4000/projetos/${id}`;
      const response = await axios.get(url);
      return response.data;
  }

  return {
    displayProjetosById,
  };
}
