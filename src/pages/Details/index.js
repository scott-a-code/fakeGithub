import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router'
import axios from 'axios';
import "./style.css"

const Details = () => {
   
    const [ repoData, setRepoData ] = useState({});
    
    const { userName } = useParams();
    const { repoName } = useParams();
    
    useEffect( async () => {
        // const { name, language, stargazers_count, watchers_count } 
        try {
          const { data } = await axios.get(`http://api.github.com/repos/${userName}/${repoName}`)
          setRepoData(data); 
          console.log(data)
      } catch (err) {
        console.log(err.message)
      }
      },[])

    return(
        <div id="repoDetails">
          <div className="container">
            <h1>{repoData.name}</h1>
            <h2>{`Language: ${repoData.language}`}</h2>
            <p>{`⭐ Stargazers: ${repoData.stargazers_count}`}</p>
            <p>{`👀 Watchers: ${repoData.watchers_count}`}</p>
          </div>
                       
        </div>
    )
}

export default Details;