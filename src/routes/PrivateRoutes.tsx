import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { auth } from "../services/firebaseConfig";

export function PrivateRoutes() {
  const user = useAuth();

  console.log("/////user autheticated", user);

  return auth ? <Outlet /> : <Navigate to="/" />;
}
