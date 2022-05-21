import React, { useState, useEffect } from "react";

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

        let arrRep = {
            name: '',
            url: ''
        }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       

        // rep.name.map(repository => {
        //     arrRep = {
        //         name: repository
        //     }
        // })

        // rep.url.map(repository => {
        //     arrRep = {
        //         url: repository
        //     }
        // })

        console.log(rep);
        // let repositoriesUrl = setRepositoriesUrl(JSON.parse(localStorage.getItem('repositoriesUrl')));
    }, []);

    return (
        <>
            <h1>Repositórios</h1>
            <ul>
                {repositories.map(repository => {
                    return (
                        // repositoriesUrl.map(repositoryUrl => {
                        //     return (
                        //         <li><a href={repositoryUrl} target='_blank'>{repository}</a></li>
                        //     )
                        // })
                        <li><strong>Repositório:</strong> {repository}</li> // TEMPORARIO
                    )
                })
                }
            </ul>
        </>
    )
}