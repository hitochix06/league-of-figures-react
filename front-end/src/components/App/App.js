/*
 * Main app component
 */

/* Module imports */
import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

import 'bootstrap/dist/js/bootstrap.min.js';
import Header from '../Header/Header';
import Chat from '../Chat/Chat';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import Login from '../Login/Login';
import Bilbliothèque from '../Bibliothèque/Bibliothèque';
import Avengers from '../Avengers/Avengers';
import Figurine from '../Figurine/Figurine';
import Créer from '../Créer/Créer';



/* Styles imports */
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';




/* Component imports */


/* App component */
class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  
  componentDidMount() {

    var options = {
      headers: {
        "X-Requested-With": "XMLHttpRequest"
      }
    }

    fetch("http://localhost:8080", options)
    .then(res => (res.json()))
    .then(
      (result) => {
        this.setState({message: result.message});
      },
      (error) => {
        console.log(error);
      }
    )
  }

  render() {
    return (
      
    <Router>
    <div>
     <Nav />
        <Switch>
          <Route path="/Bibliothèque">
            <Bilbliothèque />
          </Route>
          <Route path="/Figurine">
            <Figurine />
          </Route>
            <Route path="/Login">
            <Login />
             </Route>
            <Route path="/Créer">
            <Créer />
            </Route>
            <Route path="/Avengers">
              <Avengers/>
            </Route>
            <Route path="/">
              <Header />
            </Route>
            
        </Switch>
      </div>

      <nav>
        <Footer/>
      </nav>
    </Router>
  )};
}

export default App;
