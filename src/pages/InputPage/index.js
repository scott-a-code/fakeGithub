import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

const InputPage = () => {

    const [username, setUsername] = useState("");
    const history = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault();
        history.push(`/repos/${username}`)
    }

    return (
        <div>
            <h1>Enter Github username below!</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Github username:
                    <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Github username..." required/>
                </label>
                <button>Search</button>
            </form>
        </div>
    )
}

export default InputPage;