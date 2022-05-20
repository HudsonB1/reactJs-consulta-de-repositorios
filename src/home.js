import React, { useState } from 'react';
import './App.css';
import axios from 'axios'
import { useHistory } from 'react-router-dom';

export default function Home(props) {
  const [usuario, setUsuario] = useState('');
  const history = useHistory();

  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
      const repositories = response.data;
      // const repositoriesName = [];
      // const repositoriesUrl = [];
      const repositoriesTest = {
        name: '',
        html_url: ''
      };

      repositories.map((repository) => {
        // repositoriesName.push(repository.name);
        // repositoriesUrl.push(repository.html_url);
        repositoriesTest.name = (repository.name);
        repositoriesTest.html_url = repository.html_url);
      });
      // localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
      // localStorage.setItem('repositoriesUrl', JSON.stringify(repositoriesUrl));
      localStorage.setItem('repositoriesTest', JSON.stringify(repositoriesTest));
      // history.push('/repositories');
    });
  }

  return (
    <>
      <h1 className='teamo'>Hello, World !</h1>
      <input onChange={e => setUsuario(e.target.value)} value={usuario} className="pesquisa" placeholder="Usuário" />
      <button className="button" type="buttun" onClick={handlePesquisa} >Pesquisar</button>
      <div>
        <h1>{usuario}</h1>
      </div>
    </>
  );
}

