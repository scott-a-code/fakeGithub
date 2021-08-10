import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router'
import axios from 'axios';

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
        <div>
            
            <h1>{repoData.name}</h1>
            <h2>{repoData.language}</h2>
            <p>{repoData.stargazers_count}</p>
            <p>{repoData.watchers_count}</p>
                       
        </div>
    )
}

export default Details;