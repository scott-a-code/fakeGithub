import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router'
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./style.css"

const Repos = () => {

    const [ name, setName ] = useState('');
    const [ language, setLanguage ] = useState('');
    const [ stargazers_count, setStargazers_count] = useState(0);
    const [ watchers_count, setWatchers_count] = useState(0);
    const [ data, setData ] = useState([]);

    const { userName } = useParams();
    const { repoName } = useParams();
    
    useEffect( async () => {
      // const { name, language, stargazers_count, watchers_count } 
      try {
        const { data } = await axios.get(`http://api.github.com/users/${userName}/repos`)
        setData(data); 
        console.log(data)
    } catch (err) {
      console.log(err.message)
    }
    },[])


    return (
        <div id="repoList">
          <h1>{`${userName}'s Repositories`}</h1>
          {
            data.map((t,i) => (
              <div className="container" key={i}>
                  <Link to={`/repos/${userName}/${t.name}`}>
                    <h1>{t.name}</h1>
                  </Link>
              </div>
                  ))
          }
        </div>
    )
}

export default Repos;