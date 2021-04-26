import React from "react";
import './adminpage';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import AdminPage from './adminpage';
import Signup from './signup';
import Navbar from './navbar';

function App() {

  return (

    <Router>
      <Navbar />
      <Switch>
        <Route to="/adminpage" component={AdminPage} />
        <Route to="/signup" component={ Signup }/>
      </Switch>

    </Router>
  )
}

export default App;
