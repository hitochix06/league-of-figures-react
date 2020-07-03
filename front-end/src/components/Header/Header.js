/* Module imports */
import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'

/* Styles imports */
import './Header.css';

/* Header component */
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
          index: 0,
          direction: null,
          items: 3
        }
    }

    componentDidMount() {
      this._carouselLoop();
    }

    _carouselLoop = () => {
      setInterval(() => {
        if(this.state.index < this.state.items -1) {
          this._setIndex(this.state.index + 1);
        }
        else {
          this._setIndex(0);
        }
      }, 2000)
    }

    _setIndex = (value) => {
      this.setState({index: value});
    }

    _setDirection = (value) => {
      this.setState({index: value});
    }

    _handleSelect = (selectedIndex, e) => {
      this._setIndex(selectedIndex);
      this._setDirection(e.direction);
    };
    
    render() {
        return (
          
    
<div>

            
            <Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this._handleSelect} interval={2000} controls={false} >
              
              <Carousel.Item>
                <img class="d-block w-100" src="../assets/images/image1.jpg" alt="logo"/>
              </Carousel.Item>
              <Carousel.Item>
                <img class="d-block w-100" src="../assets/images/image2.jpg" alt="logo"/>
              </Carousel.Item>
              <Carousel.Item>
                <img class="d-block w-100" src="../assets/images/image4.jpg" alt="logo"/>
              </Carousel.Item>
            </Carousel>
          


<div className="row ">
    
      <div class="card col-3">
          <img class="card-img-top" src="../assets/images/image/bulbasaur1.jpg" alt="Figurine"/>
            <div class="card-body">
              <h5 class="card-title">Figurine Bulbasaur (Pokemon)</h5>
                <p class="card-text">Bulbasaur (Bulbizarre en français) est l'un des plus célèbres pokemon de la première génération. Pokemon était au ...</p>
                  
                  
             </div>
      </div>

      <div class="card col-3">
        <img class="card-img-top" src="../assets/images/image/brianmay.jpg" alt="Figurine"/>
          <div class="card-body">
           <h5 class="card-title">Figurine Brian May (Queen)</h5>
            <p class="card-text">Brian May est l'un des fondateurs du célèbre groupe de rock Queen. Il en est aussi le guitariste et compositeur de ...</p>
          </div>
      </div>

      <div class="card col-3">
        <img class="card-img-top" src="../assets/images/image/cuddleteamleaderflocked1.jpg" alt="Figurine"/>
          <div class="card-body">
           <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
      </div>

      <div class="card col-3">
        <img class="card-img-top" src="../assets/images/image/britebombermetali.jpg" alt="Figurine"/>
          <div class="card-body">
           <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
      </div>

      <div class="card col-3">
        <img class="card-img-top" src="../assets/images/image/demonlisa1.jpg" alt="Figurine"/>
          <div class="card-body">
           <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
      </div>

      <div class="card col-3">
        <img class="card-img-top" src="../assets/images/image/drift.jpg" alt="Figurine"/>
          <div class="card-body">
           <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
      </div>

      <div class="card col-3">
        <img class="card-img-top" src="../assets/images/image/gimli.jpg" alt="Figurine"/>
          <div class="card-body">
           <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
      </div>

      <div class="card col-3">
        <img class="card-img-top" src="../assets/images/image/gokuultra.jpg" alt="Figurine"/>
          <div class="card-body">
           <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
      </div>

      <div class="card col-3">
        <img class="card-img-top" src="../assets/images/image/groot2.jpg" alt="Figurine"/>
          <div class="card-body">
           <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
      </div>
      
      <div class="card col-3">
        <img class="card-img-top" src="../assets/images/image/halfkakuja.jpg" alt="Figurine"/>
          <div class="card-body">
           <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
      </div>
      
      <div class="card col-3">
        <img class="card-img-top" src="../assets/images/image/harleyquinn.jpg" alt="Figurine"/>
          <div class="card-body">
           <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
      </div>

      <div class="card col-3">
        <img class="card-img-top" src="../assets/images/image/harry1.jpg" alt="Figurine"/>
          <div class="card-body">
           <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
      </div>    
</div>
</div>
  

      );
    }
}



export default Header;


