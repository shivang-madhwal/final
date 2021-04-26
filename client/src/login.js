import React from "react";
import './App.css';
import Axios from "axios";
import { useState } from 'react';

function Home() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {

        Axios.post('http://localhost:3001/login', {
            username: username,
            password: password,
        }).then(() => {
            console.log("User Logged In");
        });
    };

    return (
        <div className="user-details">
            <label>Username</label>
            <input type="text" onChange={(event) => {
                setUsername(event.target.value)
            }}></input>
            <label>Password</label>
            <input type="text" onChange={(event) => {
                setPassword(event.target.value)
            }}></input>
            <button className="add-movie btn btn-danger" onClick={login}>Log In</button>
        </div>
    );
}

export default Home;