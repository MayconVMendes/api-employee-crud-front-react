import { Link } from "react-router-dom";
import "./index.scss";
import { useEffect, useState } from "react";
import useGetAllFuncionario from "../../hooks/display/useGetAllFuncionario";
import useDeleteFuncionario from "../../hooks/delete/useDeleteFuncionario";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  TableContainer,
} from "@chakra-ui/react";

export default function Funcionario() {
  const [funcionarios, setFuncionarios] = useState([]);
  const { displayAllFuncionario } = useGetAllFuncionario();
  const { deleteFuncionario } = useDeleteFuncionario();

  useEffect(() => {
    fetchFuncionarios();
  }, []);

  const fetchFuncionarios = async () => {
    const funcionariosData = await displayAllFuncionario();
    setFuncionarios(funcionariosData);
  };
  async function handleDelete(id) {
    await deleteFuncionario(id);

    fetchFuncionarios();
  }

  return (
    <div className="funcionarios">
      <h2>Todos os Funcionários</h2>
      <Link className="create" to="/funcionario/create">Criar funcionario novo aqui</Link>
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>Nome</Th>
              <Th>Salário</Th>
              <Th>CPF</Th>
              <Th>Cargo</Th>
              <Th>Editar</Th>
              <Th>Excluir</Th>
            </Tr>
          </Thead>
          <Tbody>
            {funcionarios?.map((funcionario) => (
              <Tr key={funcionario.id}>
                <Td>{funcionario.nome}</Td>
                <Td>{funcionario.salario}</Td>
                <Td>{funcionario.cpf}</Td>
                <Td>{funcionario.cargo}</Td>
                <Td>
                  <Link to={`/funcionario/update/${funcionario.id}`}>
                    <Button colorScheme="orange" variant="solid">
                      Editar
                    </Button>
                  </Link>
                </Td>
                <Td>
                  <Button
                    colorScheme="red"
                    variant="solid"
                    onClick={() => {
                      handleDelete(funcionario.id);
                    }}
                  >
                    Excluir
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}
