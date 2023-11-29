import { useState } from "react";
import useCreateDepartamento from "../../../hooks/create/useCreateDepartamento";
import { useNavigate } from "react-router-dom";
import "./index.scss"

export default function CreateDepartamento() {
  const [nome, setNome] = useState();
  const [localizacao, setLocalizacao] = useState();
  const { createDepartamento } = useCreateDepartamento();
  const navigate = useNavigate();

  async function handleSubmit() {
    if (nome && localizacao) {
      navigate("/departamento");
      await createDepartamento(nome, localizacao);
    } else {
      alert("Preencha os campos");
    }
  }

  return (
    <div className="departamento create">
      <h2>Crie aqui</h2>

      <form onSubmit={handleSubmit}>
        <label>
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
          <input
            type="text"
            value={localizacao}
            placeholder="localização"
            onChange={(event) => {
              setLocalizacao(event.target.value);
            }}
          />
        </label>
        <button className="primaryBtn" type="submit">
          Cadastrar
        </button>
      </form>
    </div>
  );
}
