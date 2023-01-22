import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export function PrivateRoutes() {
  const user = useAuth();

  console.log("/////User autheticated", user);

  return user == "undefined" || null ? <Outlet /> : <Navigate to="/" />;
}
