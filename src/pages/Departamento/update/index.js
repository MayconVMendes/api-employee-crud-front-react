import { useEffect, useState } from "react";
import useGetDepartamentoById from "../../../hooks/display/useGetDepartamentoById";
import useUpdateDepartamento from "../../../hooks/update/useUpdateDepartamento";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./index.scss"

export default function UpdateDepartamento() {
  const [nome, setNome] = useState();
  const [localizacao, setLocalizacao] = useState();
  const { displayDepartamentoById } = useGetDepartamentoById();
  const { updateDepartamento } = useUpdateDepartamento();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    
    const fetchDepartamento = async () => {
        const isData = await displayDepartamentoById(id);
        setLocalizacao(isData.localizacao);
        setNome(isData.nome)
      };
      fetchDepartamento();
  }, []);



  async function handleSubmit() {
    if (nome && localizacao) {
        navigate("/departamento")
        await updateDepartamento(id, nome, localizacao);
    } else {
        alert("Preencha os campos")
    }
  }

  return (
    <div className="departamento update">
      <h2>Crie aqui</h2>

      <form onSubmit={handleSubmit}>
        <label>
          Nome
          <input
            type="text"
            value={nome}
            placeholder="Nome"
            onChange={(event) => {
              setNome(event.target.value);
            }}
          />
        </label>
        <label>
          Localização
          <input
            type="text"
            value={localizacao}
            placeholder="Localização"
            onChange={(event) => {
              setLocalizacao(event.target.value);
            }}
          />
        </label>
        <button className="primaryBtn" type="submit">
          Atualizar
        </button>
      </form>
    </div>
  );
}
