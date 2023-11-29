import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useGetAllDepartamento from "../../../hooks/display/useGetAllDepartamento";
import useGetAllProjeto from "../../../hooks/display/useGetAllProjeto";
import useGetFuncionarioById from "../../../hooks/display/useGetFuncionarioById";
import useUpdateFuncionario from "../../../hooks/update/useUpdateFuncionario";
import { useParams } from "react-router-dom";
import "./index.scss"

export default function UpdateFuncionario() {
  const [nome, setNome] = useState();
  const [cpf, setCpf] = useState();
  const [cargo, setCargo] = useState();
  const [salario, setSalario] = useState();
  const [departamento, setDepartamento] = useState();
  const [projeto, setProjeto] = useState(null);
  const [isDepartamento, setIsDepartamento] = useState();
  const [isProjeto, setIsProjeto] = useState();
  const { displayAllDepartamento } = useGetAllDepartamento();
  const { displayAllProjeto } = useGetAllProjeto();
  const { displayFuncionarioById } = useGetFuncionarioById();
  const { updateFuncionario } = useUpdateFuncionario();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetchDados();
  }, []);

  const fetchDados = async () => {
    const isData = await displayFuncionarioById(id);
    const isDataDepartamento = await displayAllDepartamento();
    const isDataProjeto = await displayAllProjeto();
    setNome(isData.nome)
    setSalario(isData.salario)
    setCpf(isData.cpf)
    setCargo(isData.cargo)
    setDepartamento(isData.departamento?.id)
    setProjeto(isData.projeto?.id)
    setIsDepartamento(isDataDepartamento);
    setIsProjeto(isDataProjeto);
  };

  async function handleSubmit() {
    if (nome && cpf && cargo && salario && departamento) {
      navigate("/funcionario");
      await updateFuncionario(
        id,
        nome,
        parseInt(cpf),
        cargo,
        parseFloat(salario),
        parseInt(departamento),
        parseInt(projeto)
      );
    } else {
      alert("Preencha os campos");
    }
  }

  return (
    <div className="funcionario update">
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
            type="number"
            value={cpf}
            placeholder="CPF"
            onChange={(event) => {
              setCpf(event.target.value);
            }}
          />
        </label>
        <label>
          <input
            type="text"
            value={cargo}
            placeholder="Cargo"
            onChange={(event) => {
              setCargo(event.target.value);
            }}
          />
        </label>
        <label>
          <input
            type="number"
            value={salario}
            placeholder="salario"
            onChange={(event) => {
              setSalario(event.target.value);
            }}
          />
        </label>
        <label>
          Selecione departamento
          <select
            value={departamento}
            onChange={(event) => setDepartamento(event.target.value)}
          >
            <option disabled={departamento}>Escolha...</option>
            {isDepartamento?.map((departamento) => {
              return (
                <option key={departamento} value={departamento.id}>
                  {departamento.nome}
                </option>
              );
            })}
          </select>
        </label>
        <label>
          Selecione projetos
          <select
            value={projeto}
            onChange={(event) => setProjeto(event.target.value)}
          >
            <option value={null}>Nenhum</option>
            {isProjeto?.map((projeto) => {
              return (
                <option key={projeto} value={projeto.id}>
                  {projeto.nome}
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
