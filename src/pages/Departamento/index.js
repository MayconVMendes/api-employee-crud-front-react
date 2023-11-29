import { Link } from "react-router-dom";
import "./index.scss";
import { useEffect, useState } from "react";
import useGetAllDepartamento from "../../hooks/display/useGetAllDepartamento";
import useDeleteDepartamento from "../../hooks/delete/useDeleteDepartamento";
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

export default function Departamento() {
  const [departamento, setDepartamento] = useState([]);
  const { displayAllDepartamento } = useGetAllDepartamento();
  const { deleteDepartamento } = useDeleteDepartamento();

  useEffect(() => {
    fetchDepartamento();
  }, []);

  const fetchDepartamento = async () => {
    const DepartamentoData = await displayAllDepartamento();
    setDepartamento(DepartamentoData);
  };

  async function handleDelete(id) {
    await deleteDepartamento(id);

    fetchDepartamento();
  }

  return (
    <div className="departamento">
      <h2>Todos os Departamentos</h2>

      <Link className="create" to="/departamento/create">Criar departamento novo aqui</Link>

      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>Nome</Th>
              <Th>Localização</Th>
              <Th>Editar</Th>
              <Th>Deletar</Th>
            </Tr>
          </Thead>
          <Tbody>
            {departamento.map((departamento) => (
              <Tr key={departamento.id}>
                <Td>{departamento.nome}</Td>
                <Td>{departamento.localizacao}</Td>
                <Td>
                  <Link to={`/departamento/update/${departamento.id}`}>
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
                      handleDelete(departamento.id);
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
