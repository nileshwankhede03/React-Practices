import { Navigate } from 'react-router';

// this ProtectedRoute uses in a auth on;y
const ProtectedRoute = ({ children }) => {
  let isAdmin = false;

  if (!isAdmin) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
