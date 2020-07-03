/* Module imports */
import React, { Component } from 'react';

/* Styles imports */
import './Figurine.css';

/* Figurine component */
class Figurine extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    
    render() {
        return (

<div className="container">

              <div class="Carousel.Item">
                  <img class="d-block w-100" src="../assets/images/image3.jpg" alt="Assassin's Creed"/>
              </div>

  <div className="row">
      
        <div class="card col-3">
            <img class="card-img-top" src="../assets/images/imageAssassin/1.jpg" alt="Figurine"/>
              <div class="card-body">
                <h5 class="card-title">Figurine Altaïr (Assassin's Creed)</h5>
                  <p class="card-text">Altair est le personnage principal du célèbre jeu vidéo Assassin's Creed. C'est un jeune homme d'environ 25 ans, membre ...</p>
                    <a href="#" class="btn btn-primary">Ma bibliothèque</a>
              </div>
        </div>

        <div class="card col-3">
           <img class="card-img-top" src="../assets/images/imageAssassin/2.jpg" alt="Figurine"/>
              <div class="card-body">
                <h5 class="card-title">Figurine Aveline De Grandpré (Assassin's Creed III Libération)</h5>
                  <p class="card-text">Aveline De Grandpré est le personnage principal du jeu vidéo Assassin's Creed Libération. L'action de celui-ci se ..</p>
                    <a href="#" class="btn btn-primary">Ma bibliothèque</a>
              </div>
        </div>

          <div class="card col-3">
              <img class="card-img-top" src="../assets/images/imageAssassin/3.jpg" alt="Figurine"/>
                <div class="card-body">
                  <h5 class="card-title">Figurine Arno (Assassin's Creed Unity)</h5>
                    <p class="card-text">Arno est le personnage principal du jeu vidéo Assassin's Creed Unity. Arno a rejoint la confrérie des assassins afin de ....</p>
                    <a href="#" class="btn btn-primary">Ma bibliothèque</a>
              </div>
          </div>

          <div class="card col-3">
              <img class="card-img-top" src="../assets/images/imageAssassin/3.jpg" alt="Figurine"/>
                <div class="card-body">
                  <h5 class="card-title">Figurine Arno (Assassin's Creed Unity)</h5>
                    <p class="card-text">Arno est le personnage principal du jeu vidéo Assassin's Creed Unity. Arno a rejoint la confrérie des assassins afin de ....</p>
                    <a href="#" class="btn btn-primary">Ma bibliothèque</a>
              </div>
          </div>

          <div class="card col-3">
              <img class="card-img-top" src="../assets/images/imageAssassin/3.jpg" alt="Figurine"/>
                <div class="card-body">
                  <h5 class="card-title">Figurine Arno (Assassin's Creed Unity)</h5>
                    <p class="card-text">Arno est le personnage principal du jeu vidéo Assassin's Creed Unity. Arno a rejoint la confrérie des assassins afin de ....</p>
                    <a href="#" class="btn btn-primary">Ma bibliothèque</a>
              </div>
          </div>

          <div class="card col-3">
              <img class="card-img-top" src="../assets/images/imageAssassin/3.jpg" alt="Figurine"/>
                <div class="card-body">
                  <h5 class="card-title">Figurine Arno (Assassin's Creed Unity)</h5>
                    <p class="card-text">Arno est le personnage principal du jeu vidéo Assassin's Creed Unity. Arno a rejoint la confrérie des assassins afin de ....</p>
                    <a href="#" class="btn btn-primary">Ma bibliothèque</a>
              </div>
          </div>

          <div class="card col-3">
              <img class="card-img-top" src="../assets/images/imageAssassin/3.jpg" alt="Figurine"/>
                <div class="card-body">
                  <h5 class="card-title">Figurine Arno (Assassin's Creed Unity)</h5>
                    <p class="card-text">Arno est le personnage principal du jeu vidéo Assassin's Creed Unity. Arno a rejoint la confrérie des assassins afin de ....</p>
                    <a href="#" class="btn btn-primary">Ma bibliothèque</a>
              </div>
          </div>


  </div>  
</div>
        );
    }
}

export default Figurine;