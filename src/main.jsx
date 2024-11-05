import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import Painel from "./Screens/Painel/Index.jsx";
import OrdemServico from "./Screens/Ordem_de_serviço/Index.jsx";
import Cadastros from "./Screens/Cadastros/Index.jsx";
import Agenda from "./Screens/Agenda/Index.jsx";
import Login from "./Screens/Login/Index.jsx";
import SingUp from "./Screens/SingUp/Index.jsx";
import NovaOS from "./Screens/Ordem_de_serviço/NovaOS.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "cadastrar",
    element: <SingUp />,
  },
  {
    path: "app",
    element: <App />,
    children: [
      {
        path: "app/painel",
        element: <Painel />,
      },
      {
        path: "app/ordem_de_servico",
        element: <OrdemServico />,
      },
      {
        path: "app/adicionaros",
        element: <NovaOS />,
      },
      {
        path: "app/cadastros",
        element: <Cadastros />,
      },
      {
        path: "app/agenda",
        element: <Agenda />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
