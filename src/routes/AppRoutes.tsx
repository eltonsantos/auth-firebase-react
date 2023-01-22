import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Login } from "../pages/Login";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <PrivateRoute exact path="/" component={Home} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}
