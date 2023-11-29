import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useGetAllFuncionario from "../../../hooks/display/useGetAllFuncionario";
import { useParams } from "react-router-dom";
import useGetProjetosById from "../../../hooks/display/useGetProjetoById";
import "./index.scss";
import useUpdateProjeto from "../../../hooks/update/useUpdateProjeto";

export default function UpdateProjeto() {
  const [nome, setNome] = useState();
  const [dataInicio, setDataInicio] = useState();
  const [dataFim, setDataFim] = useState();
  const [funcionario, setFuncionario] = useState();
  const [isFuncionario, setIsFuncionario] = useState();
  const { displayAllFuncionario } = useGetAllFuncionario();
  const { displayProjetosById } = useGetProjetosById();
  const { updateProjeto } = useUpdateProjeto();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetchDados();
  }, []);

  const fetchDados = async () => {
    const isData = await displayAllFuncionario();
    const isDataProjeto = await displayProjetosById(id);
    setNome(isDataProjeto?.nome)
    setDataInicio(isDataProjeto?.dataInicio)
    setDataFim(isDataProjeto?.dataFim)
    setIsFuncionario(isData);
  };

  async function handleSubmit() {    
    if (nome && dataInicio  && dataFim) {
      navigate("/projeto");
      await updateProjeto(
        id,
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
      <h2>Atualize aq aqui</h2>

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
          Selecione projetos
          <select
            value={funcionario}
            onChange={(event) => setFuncionario(event.target.value)}
          >
            <option value={null}>Nenhum</option>
            {isFuncionario?.map((funcionario) => {
              return (
                <option key={funcionario} value={funcionario.id}>
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
