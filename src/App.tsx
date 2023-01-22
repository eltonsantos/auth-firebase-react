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
        <Route element={<Home />} path="/" />
        <Route element={<Login />} path="/login" />

        <Route>
          <Route element={<PrivateRoutes />}>
            <Route element={<Dashboard />} path="/dashboard" />
            <Route element={<Admin />} path="/admin" />
            <Route element={<Register />} path="/register" />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}
