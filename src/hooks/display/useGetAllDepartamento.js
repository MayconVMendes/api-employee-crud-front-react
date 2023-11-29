import axios from "axios";

export default function useGetAllDepartamento() {

  async function displayAllDepartamento() {
    let url = `http://localhost:4000/departamentos`;
      const response = await axios.get(url);
      return response.data;
  }

  return {
    displayAllDepartamento,
  };
}
