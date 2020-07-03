/* Module imports */
import React, { Component } from 'react';

/* Styles imports */
import './Avengers.css';

/* Figurine component */
class Avengers extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    
    render() {
        return (

<div className="container">

              <div class="Carousel.Item">
                  <img class="d-block w-100" src="../assets/images/avengers.jpg" alt="Assassin's Creed"/>
              </div>

  <div className="row">
      
        <div class="card col-3">
            <img class="card-img-top" src="../assets/images/Avengers/1.jpg" alt="Figurine"/>
              <div class="card-body">
                <h5 class="card-title">Figurine Black Widow (Avengers Age Of Ultron)</h5>
                  <p class="card-text">Black Widow est un des personnages principaux du film Avengers Age Of Ultron des studios Marvel. </p>
                    <a href="#" class="btn btn-primary">Ma bibliothèque</a>
              </div>
        </div>

        <div class="card col-3">
           <img class="card-img-top" src="../assets/images/Avengers/2.jpg" alt="Figurine"/>
              <div class="card-body">
                <h5 class="card-title">Figurine Captain America (Avengers Age Of Ultron)</h5>
                  <p class="card-text">Captain America est l'un des personnages principaux du film Avengers Age Of Ultron des studios Marvel</p>
                    <a href="#" class="btn btn-primary">Ma bibliothèque</a>
              </div>
        </div>

          <div class="card col-3">
              <img class="card-img-top" src="../assets/images/Avengers/3.jpg" alt="Figurine"/>
                <div class="card-body">
                  <h5 class="card-title">Figurine Captain Marvel (Avengers Endgame)</h5>
                    <p class="card-text">Captain Marvel est un personnage important du film Avengers Endgame. On avait découvert Carole Danvers dans son premier .</p>
                    <a href="#" class="btn btn-primary">Ma bibliothèque</a>
              </div>
          </div>

          <div class="card col-3">
              <img class="card-img-top" src="../assets/images/Avengers/4.jpg" alt="Figurine"/>
                <div class="card-body">
                  <h5 class="card-title">Figurine Arno (Assassin's Creed Unity)</h5>
                    <p class="card-text">Arno est le personnage principal du jeu vidéo Assassin's Creed Unity. Arno a rejoint la confrérie des assassins afin de ....</p>
                    <a href="#" class="btn btn-primary">Ma bibliothèque</a>
              </div>
          </div>

          <div class="card col-3">
              <img class="card-img-top" src="../assets/images/Avengers/5.jpg" alt="Figurine"/>
                <div class="card-body">
                  <h5 class="card-title">Figurine Arno (Assassin's Creed Unity)</h5>
                    <p class="card-text">Arno est le personnage principal du jeu vidéo Assassin's Creed Unity. Arno a rejoint la confrérie des assassins afin de ....</p>
                    <a href="#" class="btn btn-primary">Ma bibliothèque</a>
              </div>
          </div>

          <div class="card col-3">
              <img class="card-img-top" src="../assets/images/Avengers/6.jpg" alt="Figurine"/>
                <div class="card-body">
                  <h5 class="card-title">Figurine Arno (Assassin's Creed Unity)</h5>
                    <p class="card-text">Arno est le personnage principal du jeu vidéo Assassin's Creed Unity. Arno a rejoint la confrérie des assassins afin de ....</p>
                    <a href="#" class="btn btn-primary">Ma bibliothèque</a>
              </div>
          </div>

          <div class="card col-3">
              <img class="card-img-top" src="../assets/images/Avengers/.jpg" alt="Figurine"/>
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

export default Avengers;