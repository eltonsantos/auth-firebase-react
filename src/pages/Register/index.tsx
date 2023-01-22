import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../services/firebaseConfig";

export function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  function handleSignUp(e: any) {
    e.preventDefault();
    createUserWithEmailAndPassword(email, password);
    navigate("/admin");
  }

  if (loading) {
    return <p>carregando...</p>;
  }
  return (
    <div className="container">
      <header className="header">
        <h1>Registro</h1>
        <span>Por favor digite suas informações de cadastro</span>
      </header>

      <form>
        <div className="inputContainer">
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="johndoe@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="********************"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button onClick={handleSignUp} className="button">
          Register
        </button>
        <div className="footer">
          <p>Você já tem uma conta?</p>
          <Link to="/">Acesse sua conta aqui</Link>
        </div>
      </form>
    </div>
  );
}
