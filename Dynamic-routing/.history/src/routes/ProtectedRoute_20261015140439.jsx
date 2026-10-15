
const ProtectedRoute = ({ children }) => {

    let isAdmin = false;

    if(isAdmin){
        return Navigation
    }
  return children;
};

export default ProtectedRoute;
