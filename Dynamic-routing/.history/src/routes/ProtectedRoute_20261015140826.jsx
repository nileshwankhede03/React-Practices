import { Navigate } from 'react-router';

const ProtectedRoute = ({ children }) => {
  let isAdmin = false;

  if (!isAdmin) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
