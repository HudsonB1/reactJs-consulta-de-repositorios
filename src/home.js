import React, { useState } from 'react';
import './Home.css';
import axios from 'axios'
import { useHistory } from 'react-router-dom';

export default function Home(props) {
  const [usuario, setUsuario] = useState('');
  const history = useHistory();

  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
      const repositories = response.data;
      const repositoriesName = [];
      const repositoriesUrl = [];

      repositories.map((repository) => {
        repositoriesName.push(repository.name);
        repositoriesUrl.push(repository.html_url);
      });

      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
      localStorage.setItem('repositoriesUrl', JSON.stringify(repositoriesUrl));
      history.push('/repositories');
    });
  }

  return (
    <>
      <h1 className='header'>Pesquise seus repositórios GitHub</h1>
      <strong><input onChange={e => setUsuario(e.target.value)} value={usuario} className="pesquisa" placeholder="Usuário" /></strong>
      <button className="button" type="buttun" onClick={handlePesquisa} ><strong>Pesquisar</strong></button>
    </>
  );
}