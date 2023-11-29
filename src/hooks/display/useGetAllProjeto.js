import axios from "axios";

export default function useGetAllProjeto() {

  async function displayAllProjeto() {
    let url = `http://localhost:4000/projetos`;
      const response = await axios.get(url);
      return response.data;
  }

  return {
    displayAllProjeto,
  };
}
