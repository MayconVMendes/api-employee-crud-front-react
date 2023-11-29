import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Funcionario from "./pages/Funcionario";
import Departamento from "./pages/Departamento";
import Projetos from "./pages/Projetos";
import CreateDepartamento from "./pages/Departamento/create";
import UpdateDepartamento from "./pages/Departamento/update";
import CreateFuncionario from "./pages/Funcionario/create";
import UpdateFuncionario from "./pages/Funcionario/update";
import CreateProjeto from "./pages/Projetos/create";
import UpdateProjeto from "./pages/Projetos/update";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/funcionario",
        element: <Funcionario />,
      },
      {
        path: "/funcionario/create",
        element: <CreateFuncionario />,
      },
      {
        path: "/funcionario/update/:id",
        element: <UpdateFuncionario />,
      },
      {
        path: "/departamento",
        element: <Departamento />,
      },
      {
        path: "/departamento/create",
        element: <CreateDepartamento />,
      },
      {
        path: "/departamento/update/:id",
        element: <UpdateDepartamento />,
      },
      {
        path: "/projeto",
        element: <Projetos />,
      },
      {
        path: "/projeto/create",
        element: <CreateProjeto />,
      },
      {
        path: "/projeto/update/:id",
        element: <UpdateProjeto />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
