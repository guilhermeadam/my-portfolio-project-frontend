import React, { useState, useEffect } from "react";

import api from '../../services/api';

import './styles.css'

export default function PageHome() {
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [notes, setNotes] = useState([]);
  const codintuser = localStorage.getItem('codintuser')

  useEffect(() => {
    api
      .get("notes", {
        headers: {
          Authorization: codintuser,
        },
      })
      .then((response) => {
        setNotes(response.data);
      });
  }, [notes])

  async function handleNewNotes(e) {
    e.preventDefault();

    const data = {
      subject,
      description,
      codintuser,
    };
    try {
      await api.post('cadastrarnotes', data)
      setSubject('');
      setDescription('');
      alert('Nota criada com sucesso!')
    } catch(err) {
      alert('Erro! Tente novamente.')
    }
  }

  return (
    <div>
      <h1>Bem vindo ao YouNotes</h1>
      {/* {notes.map((note) => (
        <p key={note.codintnote}> {note.codintuser} </p>
      ))} */}
      <div className="criar-notes-container">
        <form onSubmit={handleNewNotes}>
          <h3>Assunto:</h3>
          <input 
            placeholder="Assunto:"
            required
            autoFocus 
            value={subject}
            onChange={e => setSubject(e.target.value)}
          />
          <h3>Descricao:</h3>
          <textarea
            placeholder="Descricao:"
            required
            maxLength="120"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <button>Criar nota</button>
        </form>
      </div>

      <div className="notes-container" >
       <ul>
        {notes.map((note) => (
          <li>
          <strong>Assunto:</strong>
          <p> {note.subject} </p>
          <strong>Descricao:</strong>
          <p> {note.description} </p>
        </li>
        ))}
       </ul>
      </div>
    </div>
  );
}
