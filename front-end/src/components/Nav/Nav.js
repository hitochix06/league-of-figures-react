/* Module imports */
import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";


/* Styles imports */
import './Nav.css';

/* Header component */
class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    
    render() {
        return (


<nav class="navbar navbar-expand-lg nav">
  
    <div class="collapse navbar-collapse" id="navbar">
      <ul class="navbar-nav mr-auto">

      <li class="nav-item">
          <Link class="nav-link" to="/">Accueil</Link>
      </li>
<li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Différent thème figurines
                </a>
       
               
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link class="dropdown-item" to="/Figurine">Assassin's Creed</Link>
                  <Link class="dropdown-item" to="/Avengers">Avengers</Link>
                  
                      <button class="dropdown-item" type="button">La belle et la Bête</button>
                        <button class="dropdown-item" type="button">Captain America</button>
                        <button class="dropdown-item" type="button">Breaking Bad</button>
                          <button class="dropdown-item" type="button">Coco</button>
                            <button class="dropdown-item" type="button">Death Note</button>
                              <button class="dropdown-item" type="button">Disney</button>  
            </div>
        </li>
      </ul>

      <li class="nav-item">
          <Link class="nav-link" to="/Bibliothèque">Ma bibliothèque</Link>
      </li>

      <li class="nav-item">
          <Link class="nav-link" to="/Login">Compte</Link>
      </li>

      
           
            <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="search" placeholder="Recherche" aria-label="Search"/>
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Recherche</button>
            </form>
    </div>
</nav>


        );
    }
}

export default Nav;