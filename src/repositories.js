import React, { useState, useEffect } from "react";

export default function Repositories() {
    const [repositoriesName, setRepositories] = useState([]);
    // const [repositoriesUrl, setRepositoriesUrl] = useState([]);

    useEffect(() => {
        let repositoriesName = setRepositories(JSON.parse(localStorage.getItem('repositoriesName')));
        // let repositoriesUrl = setRepositoriesUrl(JSON.parse(localStorage.getItem('repositoriesUrl')));
    }, []);

    return (
        <>
            <h1>Repositórios</h1>
            <ul>
                {repositoriesName.map(repository => {
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