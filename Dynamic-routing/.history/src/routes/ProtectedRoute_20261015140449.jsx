import { Navigate } from "react-router";

const ProtectedRoute = ({ children }) => {

    let isAdmin = false;

    if(isAdmin){
        return <Navigate />
    }
  return children;
};

export default ProtectedRoute;
