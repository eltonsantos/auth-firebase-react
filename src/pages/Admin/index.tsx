import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../services/firebaseConfig";

export function Admin() {
  const navigate = useNavigate();

  async function handleLogout() {
    await signOut(auth);
    navigate("/");
  }

  return (
    <>
      <h1>Admin - Apenas logado</h1>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}
