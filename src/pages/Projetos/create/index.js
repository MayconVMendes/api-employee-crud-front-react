import { useState, useEffect } from "react";
import useCreateFuncionario from "../../../hooks/create/useCreateFuncionario";
import { useNavigate } from "react-router-dom";
import useGetAllFuncionario from "../../../hooks/display/useGetAllFuncionario";
import useCreateProjeto from "../../../hooks/create/useCreateProjeto";
import "./index.scss";

export default function CreateProjeto() {
  const [nome, setNome] = useState();
  const [dataInicio, setDataInicio] = useState();
  const [dataFim, setDataFim] = useState();
  const [funcionario, setFuncionario] = useState();
  const [isFuncionario, setIsFuncionario] = useState();
  const { createFuncionario } = useCreateFuncionario();
  const { displayAllFuncionario } = useGetAllFuncionario();
  const { createProjeto } = useCreateProjeto();
  const navigate = useNavigate();

  useEffect(() => {
    fetchDados();
  }, []);

  const fetchDados = async () => {
    const isData = await displayAllFuncionario();
    setIsFuncionario(isData);
  };

  async function handleSubmit() {
    if (nome && dataInicio  && dataFim && funcionario) {
      navigate("/projeto");
      await createProjeto(
        nome,
        dataInicio,
        dataFim,
        parseInt(funcionario),
      );

    } else {
      alert("Preencha os campos");
    }
  }

  return (
    <div className="projeto create">
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
            type="date"
            value={dataInicio}
            placeholder="Data inicio"
            onChange={(event) => {
              setDataInicio(event.target.value);
            }}
          />
        </label>
        <label>
          <input
            type="date"
            value={dataFim}
            placeholder="Data fim"
            onChange={(event) => {
              setDataFim(event.target.value);
            }}
          />
        </label>
        <label>
          Selecione departamento
          <select
            value={funcionario}
            onChange={(event) => setFuncionario(event.target.value)}
          >
            <option disabled={funcionario}>Escolha...</option>
            {isFuncionario?.map((funcionario) => {
              return (
                <option key={funcionario.id} value={funcionario.id}>
                  {funcionario.nome}
                </option>
              );
            })}
          </select>
        </label>

        <button className="primaryBtn" type="submit">
          Cadastrar
        </button>
      </form>
    </div>
  );
}
