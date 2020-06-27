import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import api from '../../services/api';

import "./styles.css";
import logo from "../../assets/logo_size.jpg";

export default function PageCadastro() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  async function handleCadastro(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      password,
    };

    try{
      await api.post('cadastrouser', data);
      alert('Cadastro realizado com sucesso!');
      history.push('/login');
    }catch(err) {
      alert('Tente novamente...')
      setName('');
      setEmail('');
      setPassword('');
    }
  }

  return (
    <div className="cadastro-container">
      <form onSubmit={handleCadastro}>
        <img src={logo} alt="You Notes" />
        <h2>Realize seu Cadastro!</h2>
        
        <h3>Cadastro de Nome:</h3>
        <input 
          placeholder="Ex: Guilherme Adam" 
          autoFocus 
          required
          value={name}
          onChange={e => setName(e.target.value)} 
        />

        <h3>Cadastro de Email:</h3>
        <input 
          placeholder="Ex: example@example.com.br" 
          type="email" 
          required
          value={email}
          onChange={e => setEmail(e.target.value)} 
        />

        <h3>Cadastro de Senha:</h3>
        <input 
          placeholder="Ex: eeTc5142a" 
          type="password" 
          required
          value={password}
          onChange={e => setPassword(e.target.value)} 
        />

        <button className="cadastrar" type="submit">Cadastrar</button>
        
        <Link className="back" to="/login">
          Voltar ao login?
        </Link>
        
        <footer>Aplicativo YouNotes 2020</footer>
      </form>
    </div>
  );
}
