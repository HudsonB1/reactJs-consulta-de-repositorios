import React, { useState } from 'react';
import './App.css';

function App(props) {
  const [ usuario, setUsuario] = useState('Hudson');
  return (
      <header className="App-header">
        <h1 className='teamo'>TE AMO GATA</h1>
        <input type="text" className="pesquisa" placeholder="Usuário"/>
        <button className="button" type="buttun">Pesquisar</button>
      </header>
  );
}

export default App;