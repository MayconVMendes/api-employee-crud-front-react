import axios from "axios";

export default function useUpdateDepartamento() {
  async function updateDepartamento(id, nome, localizacao) {
    let url = `http://localhost:4000/departamentos/${id}`;
    const response = await axios.put(url, {
      nome: nome,
      localizacao: localizacao,
    });
    return response.data;
  }

  return {
    updateDepartamento,
  };
}
