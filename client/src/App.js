import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AdminPage from './adminpage';
import Signup from './signup';
import Navbar from './navbar';
import Login from "./login";
import Home from "./home.js";

function App() {

  return (

    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/adminpage" component={AdminPage} />
      </Switch>

    </Router>
  )
}

export default App;
