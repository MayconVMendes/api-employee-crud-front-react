import axios from "axios";

export default function useCreateDepartamento() {

  async function createDepartamento(nome, localizacao) {
    let url = `http://localhost:4000/departamentos`;
      const response = await axios.post(url, {
        nome: nome,
        localizacao: localizacao
      });
      return response.data;
  }

  return {
    createDepartamento,
  };
}
