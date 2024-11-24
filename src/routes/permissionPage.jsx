/* eslint-disable react/prop-types */
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const ProtectedRoute = ({ children, requiredPermissions }) => {
  const { user, permissions, loading } = useAuth();

  if (loading) {
    return null;
  }

  if (!user) {
    return <Navigate to="/" replace />;
  }

  /* if (requiredPermissions && !requiredPermissions.some(permission => permissions.includes(permission) && requiredPermissions.some(() => permissions.includes('MASTER')))) {
    alert('Usuário não tem permissão para acessar essa tela!')
    return <Navigate to="/app/ordem_de_servico" />
  } */

  if (requiredPermissions && !requiredPermissions.some(permission => permissions.includes(permission))) {
    //alert('Usuário não tem permissão para acessar essa tela!')
    return <Navigate to="/app/ordem_de_servico" replace />
  }

  return children;
};

export default ProtectedRoute;
