import React from "react";
import './App.css';
import { useState } from 'react';
import Axios from 'axios';
import { useHistory, Redirect } from 'react-router-dom';


function SignUp() {

    let history = useHistory();
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const addUser = () => {
        try {
            Axios.post('http://localhost:3001/signup', {
                name: name,
                username: username,
                email: email,
                password: password,
            }).then(() => {
                <Redirect to="/login" />
                console.log(" User details inserted successfully");
            });
        } catch (error) {
            console.log(error);
        }

    };


    return (
        <div className="form-control">
            <label>Name</label>
            <input className="form-control" type="text" onChange={(event) => {
                setName(event.target.value)
            }}></input>
            <label>E-mail</label>
            <input className="form-control" type="text" onChange={(event) => {
                setEmail(event.target.value)
            }}></input>
            <label>Username</label>
            <input className="form-control" type="text" onChange={(event) => {
                setUsername(event.target.value)
            }}></input>
            <label>Password</label>
            <input className="form-control" type="text" onChange={(event) => {
                setPassword(event.target.value)
            }}></input>
            <button className="add-movie btn btn-danger" onClick={addUser}>Sign Up</button>
        </div>
    );
}

export default SignUp;