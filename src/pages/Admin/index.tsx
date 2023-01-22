import { NavLink } from "react-router-dom";

export function Admin() {
  return (
    <>
      <h1>Admin</h1>
      <NavLink to="/logout">Logout</NavLink>
    </>
  );
}
