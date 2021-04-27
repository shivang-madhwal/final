const express = require('express')
const app = express();
const mysql = require('mysql')
const cors = require('cors');

// const { default: SignUp } = require('../client/src/SignUp');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'sasank2001',
    database: 'movie_database'
});

app.post('/addmovies', (req, res) => {
    const title = req.body.title
    const director = req.body.director
    const year = req.body.year
    const genre = req.body.genre
    const rating = req.body.rating
    // console.log("Rating to be inserted : " + req.body.rating);

    db.query('INSERT INTO movie (title, director, year, genre, rating) VALUES(?,?,?,?,?)',
        [title, director, year, genre, rating],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("movie inserted");
            }
        }
    );
});

app.get('/movieList', (req, res) => {
    db.query("SELECT * FROM movie", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
});

app.post('/searchMovie', (req, res) => {
    const name = req.body.name;
    console.log("console name", name);
    db.query('SELECT * FROM movie WHERE Title = ?',
        name,
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
}
);

app.post('/signup', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    console.log("inside signup function: name: " + req.body.name + " email: " + req.body.email + " username: " + req.body.username + " password: " + req.body.password);

    db.query('INSERT INTO user (name, email, username, password) VALUES (?,?,?,?)',
        [name, email, username, password],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("User logged in successfully");
            }
        }
    );
});

app.post('/login', (req, res) => {
    const username = req.body.username
    const password = req.body.password
    console.log("inside login function:  username: " + req.body.username + " password: " + req.body.password);

    db.query('SELECT * FROM user WHERE username = ? AND password = ?',
        [username, password],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                if (result.length > 0) {
                    res.send(result);
                } else {
                    res.send({ message: "no such user found" });
                }
            }
        }
    );
});

app.listen(3001, () => {
    console.log("server running on 3001");
});

