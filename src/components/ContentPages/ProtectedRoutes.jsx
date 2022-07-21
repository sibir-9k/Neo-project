import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const useAuth = () => {
  const loggedIn = useSelector(state => state.user.user.token);
  return loggedIn;
};


const ProtectedRoutes = () => {
  
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;