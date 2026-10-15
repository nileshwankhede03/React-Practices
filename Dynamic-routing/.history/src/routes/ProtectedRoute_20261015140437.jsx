
const ProtectedRoute = ({ children }) => {

    let isAdmin = false;

    if(isAdmin){
        return Nav
    }
  return children;
};

export default ProtectedRoute;
