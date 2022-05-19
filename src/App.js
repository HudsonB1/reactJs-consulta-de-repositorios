import React, { useState } from 'react';
import './App.css';
import axios from 'axios'

function App(props) {
  const [ usuario, setUsuario] = useState('');
  
  function handlePesquisa() {
      axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => console.log(response.data));
  }
  
  return (
      <header className="App-header">
        <h1 className='teamo'>Hello, World !</h1>
        <input onChange={e => setUsuario(e.target.value)} value={usuario} className="pesquisa" placeholder="Usuário"/>
        <button className="button" type="buttun" onClick={handlePesquisa} >Pesquisar</button>
      </header>
  );
}

export default App;