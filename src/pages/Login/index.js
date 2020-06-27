import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import api from "../../services/api";

import "./styles.css";
import logo from "../../assets/logo_size.jpg";

export default function LoginPage() {
  const [email, setEmail] = useState("teste@teste.com");
  const [password, setPassword] = useState("1234");

  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    const data = {
      email,
      password,
    };

    try {
      const response = await api.post("/login", data);

      const { codintuser, name } = response.data;

      localStorage.setItem("codintuser", codintuser);
      localStorage.setItem("name", name);

      history.push("/home");
    } catch (err) {
      alert("Usuario ou senha incorretos!");
    }
  }

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <img src={logo} alt="You Notes" />
        <h2>Email:</h2>
        <input
          placeholder="Seu email"
          type="email"
          required
          autoFocus 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <h2>Senha:</h2>
        <input
          placeholder="Sua senha"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="acessar">
          Acessar
        </button>
        <button
          onClick={() => {
            history.push("/cadastro");
          }}
          className="cadastrar"
        >
          Cadastrar
        </button>
        <footer>Aplicativo YouNotes 2020</footer>
      </form>
    </div>
  );
}
