import { NavLink } from "react-router-dom";

export function Home() {
  return (
    <>
      <h1>Home</h1>
      <NavLink to="/login">Login</NavLink>
    </>
  );
}
