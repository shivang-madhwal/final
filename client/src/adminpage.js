import React from "react";
import { Component, useState } from "react";
import Axios from 'axios';
import './App.css';

function AdminPage() {

    const [title, setTitle] = useState("");
    const [director, setDirector] = useState("");
    const [year, setYear] = useState(0);
    const [genre, setGenre] = useState("");
    const [rating, setRating] = useState(0);
    //my commits
    const [user, setUser] = useState("");

    //for search box
    const [name, setName] = useState("");
    const [movie, setMovie] = useState([]);

    const [movieList, setMovieList] = useState([]);
    //console.log(movieList);
    const displayInfo = () => {
        console.log(title + " " + director + " " + year + " " + genre + " " + rating);
    }

    const addMovie = () => {
        //console.log(title);
        Axios.post('http://localhost:3001/addmovies', {
            title: title,
            director: director,
            year: year,
            genre: genre,
            rating: rating,
        }).then(() => {
            console.log("Values inserted successfully");
        });
    };

    const searchMovie = () => {
        console.log(name);
        Axios.post("http://localhost:3001/searchMovie", {
            name: name,
        }).then((response) => {
            setMovieList(response.data);
            console.log(response.data);
        })
    }

    const getMovies = () => {
        Axios.get("http://localhost:3001/movieList").then((response) => {
            setMovieList(response.data);
            console.log(response.data);
        });
    }

    return (
        <div className="App">

            <div className="searchBox">
                <label>Search for movie</label>
                <input className="form-control" type='text' onChange={(event) => {
                    setName(event.target.value);
                }}></input>
                <button className="btn btn-primary" onClick={searchMovie}>Search</button>
                <button className="btn btn-info" onClick={getMovies}>Show all movies</button>

            </div>

            <div className="movie-details">
                <label>Movie Title</label>
                <input className="form-control" type="text" onChange={(event) => {
                    setTitle(event.target.value);
                }}></input>
                <label>Director</label>
                <input className="form-control" type="text" onChange={(event) => {
                    setDirector(event.target.value);
                }}></input>
                <label>genre</label>
                <input className="form-control" type="text" onChange={(event) => {
                    setGenre(event.target.value);
                }}></input>
                <label>Year</label>
                <input className="form-control" type="number" onChange={(event) => {
                    setYear(event.target.value);
                }}></input>
                <label>Rating</label>
                <input className="form-control" type="number" onChange={(event) => {
                    setRating(event.target.value);
                }}></input>
                <button className="add-movie btn btn-danger" onClick={addMovie}>Add movie</button>
            </div>


            <div className="movie-box">
                {movieList.map((val, key) => {
                    //console.log(val);
                    return (
                        <div key={key} className="movie">
                            <div className="details">Title: {val.Title}</div>
                            <div className="details"> genre: {val.Genre}</div>
                            <div className="details"> Director: {val.Director}</div>
                            <div className="details"> Year: {val.Year}</div>
                            <div className="details"> Rating: {val.Rating}</div>
                        </div>);
                })}
            </div>
        </div>
    );
}

export default AdminPage;
