import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Admin } from "./pages/Admin";
import { Dashboard } from "./pages/Dashboard";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { PrivateRoutes } from "./routes/PrivateRoutes";

export function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route element={<Dashboard />} path="/dashboard" />
          <Route element={<Register />} path="/register" />
          <Route element={<Admin />} path="/admin" />
          <Route element={<Home />} path="/" />
        </Route>

        <Route element={<Login />} path="/login" />
      </Routes>
    </Router>
  );
}
