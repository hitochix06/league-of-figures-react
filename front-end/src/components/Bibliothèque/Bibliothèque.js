/* Module imports */
import React, { Component } from 'react';

/* Styles imports */
import './Bilbliothèque.css';
/* Bilbliothèque component */
class Bilbliothèque extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    
    render() {
        return (


    
<div className="container">


  <div className="row">

        <div class="card col-3">
            <img class="card-img-top" src="..." alt="Card image cap"/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    
               </div>
        </div>

        <div class="card col-3">
          <img class="card-img-top" src="..." alt="Card image cap"/>
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

export default Bilbliothèque;