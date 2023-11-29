import axios from "axios";

export default function useDeleteDepartamento() {

  async function deleteDepartamento(id) {
    let url = `http://localhost:4000/departamentos/${id}`;
      const response = await axios.delete(url);
      return response.data;
  }

  return {
    deleteDepartamento,
  };
}
