import axios from "axios";

export default function useDeleteProjeto() {

  async function deleteProjeto(id) {
    let url = `http://localhost:4000/projetos/${id}`;
      const response = await axios.delete(url);
      return response.data;
  }

  return {
    deleteProjeto,
  };
}
