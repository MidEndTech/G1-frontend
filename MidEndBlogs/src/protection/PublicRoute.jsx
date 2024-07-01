import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router-dom";

function PublicRoute() {
  const token = Cookies.get("token");
  if (token) {
    return <Navigate to="/home" replace />;
  }
  return <Outlet />;
}

export default PublicRoute;
