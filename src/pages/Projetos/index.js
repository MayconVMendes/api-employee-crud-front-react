import { Link } from "react-router-dom";
import "./index.scss";
import { useEffect, useState } from "react";
import useGetAllProjeto from "../../hooks/display/useGetAllProjeto";
import useDeleteProjeto from "../../hooks/delete/useDeleteProjeto";
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

export default function Projetos() {
  const [projetos, setProjetos] = useState([]);
  const { displayAllProjeto } = useGetAllProjeto();
  const { deleteProjeto } = useDeleteProjeto();

  useEffect(() => {


    fetchProjetos();
  }, []);

  const fetchProjetos = async () => {
    const ProjetosData = await displayAllProjeto();
    setProjetos(ProjetosData);
  };

  async function handleDelete(id) {
    await deleteProjeto(id);

    fetchProjetos();
  }

  return (
    <div className="projetos">
      <h2>Todos os Projetos</h2>
      <Link className="create" to="/projeto/create">Criar projeto novo aqui</Link>
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>Nome</Th>
              <Th>Editar</Th>
              <Th>Excluir</Th>
            </Tr>
          </Thead>
          <Tbody>
            {projetos.map((projeto) => (
              <Tr key={projeto.id}>
                <Td>{projeto.nome}</Td>
                <Td>
                  <Link to={`/projeto/update/${projeto.id}`}>
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
                      handleDelete(projeto.id);
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
