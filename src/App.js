import React, { useState } from 'react';
import './App.css';

function App(props) {
  const [ usuario, setUsuario] = useState('');
  return (
      <header className="App-header">
        <h1 className='teamo'>TE AMO GATA</h1>
        <input onChange={e => setUsuario(e.target.value)} className="pesquisa" placeholder="Usuário"/>
        <button className="button" type="buttun">Pesquisar</button>
      </header>
  );
}

export default App;