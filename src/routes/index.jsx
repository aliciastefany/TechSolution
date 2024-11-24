import App from "../App.jsx";
import Painel from "../Screens/Painel/Index.jsx";
import OrdemServico from "../Screens/Ordem_de_serviço/Index.jsx";
import Cadastros from "../Screens/Cadastros/Index.jsx";
import Agenda from "../Screens/Agenda/Index.jsx";
import Login from "../Screens/Login/Index.jsx";
import SingUp from "../Screens/SingUp/Index.jsx";
import NovaOS from "../Screens/Ordem_de_serviço/NovaOS.jsx";
import NovaOSView from "../Screens/Ordem_de_serviço/NovaOSView.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./permissionPage.jsx";

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
        path: "/app/painel",
        element: (
          <ProtectedRoute requiredPermissions={['MASTER', 'ADM']}>
            <Painel />
          </ProtectedRoute>
        ),
      },
      {
        path: "/app/ordem_de_servico",
        element: (
          <ProtectedRoute requiredPermissions={['MASTER', 'ADM', 'USER']}>
            <OrdemServico />
          </ProtectedRoute>
        ),
      },
      {
        path: "/app/adicionaros",
        element: (
          <ProtectedRoute requiredPermissions={['MASTER', 'ADM']}>
            <NovaOS />
          </ProtectedRoute>
        ),
      },
      {
        path: "/app/viewos",
        element: (
          <ProtectedRoute requiredPermissions={['USER']}>
            <NovaOSView />
          </ProtectedRoute>
        ),
      },
      {
        path: "/app/cadastros",
        element: (
          <ProtectedRoute requiredPermissions={['MASTER']}>
            <Cadastros />
          </ProtectedRoute>
        ),
      },
      {
        path: "/app/agenda",
        element: (
          <ProtectedRoute requiredPermissions={['MASTER', 'ADM']}>
            <Agenda />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

const RouteNavigation = () => {
  return <RouterProvider router={router} />;
};

export default RouteNavigation;
