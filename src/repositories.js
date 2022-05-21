import React, { useState, useEffect, Children } from "react";
import './repositories.css';

export default function Repositories() {
    const [repositoriesName, setRepositoriesName] = useState([]);
    const [repositoriesUrl, setRepositoriesUrl] = useState([]);
    const [repositories, setRepositories] = useState([[]]);


    useEffect(() => {
        let repName = JSON.parse(localStorage.getItem('repositoriesName'));
        let repUrl = JSON.parse(localStorage.getItem('repositoriesUrl'));
        setRepositoriesName(repName);
        setRepositoriesUrl(repUrl);

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
        console.log(arrRep[2])
        setRepositories(arrRep);
    }, []);

    return (
        <>
            <h1>Repositórios</h1>
            <ul>
                {repositories.map(repository => {
                    return (
                        <div>
                            <li><strong>Repositório:</strong> <a href={repository.url} target='_blank'>{repository[repositories.indexOf(repository)]}{(repository.name)}</a></li>
                        </div>
                    )
                })
                }
            </ul>
        </>
    )
}