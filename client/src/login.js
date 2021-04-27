import React from "react";
import './App.css';
import Axios from "axios";
import { useState } from 'react';

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {

        Axios.post('http://localhost:3001/login', {
            username: username,
            password: password,
        }).then((response) => {
            console.log("User Logged in");
            console.log(response.data);
        });
    };

    return (
        <div className="form-control">
            <label>Username</label>
            <input className="form-control" type="text" onChange={(event) => {
                setUsername(event.target.value)
            }}></input>
            <label>Password</label>
            <input className="form-control" type="password" onChange={(event) => {
                setPassword(event.target.value)
            }}></input>
            <button className="add-movie btn btn-danger" onClick={login}>Log In</button>
        </div>
    );
}

export default Login;