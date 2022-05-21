import React, { useState, useEffect } from "react";
import './repositories.css';
import { Link } from 'react-router-dom';

export default function Repositories() {
    const [repositories, setRepositories] = useState([[]]);


    useEffect(() => {
        let repName = JSON.parse(localStorage.getItem('repositoriesName'));
        let repUrl = JSON.parse(localStorage.getItem('repositoriesUrl'));

        let rep = {
            name: repName,
            url: repUrl
        }

        let arrRep = []

        repName.map(repository => {
            return (
                arrRep.push({
                    url: repUrl[(repName.indexOf(repository))],
                    name: repository.toUpperCase()
                })
            )
        })
        setRepositories(arrRep);
        //localStorage.clear();
    }, []);

    return (
        <>
            <h1>Repositórios</h1>
            <ul>
                {repositories.map(repository => {
                    return (
                        <div className="repositories">
                            <li><strong>Repositório:</strong> <a href={repository.url} target='_blank'>{repository[repositories.indexOf(repository)]}{(repository.name)}</a></li>
                        </div>
                    )
                })
                }
            </ul>
            <Link to='/'><button className="voltar"><strong>Voltar</strong></button></Link>
        </>
    )
}