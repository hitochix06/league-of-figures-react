/* Module imports */
import React, { Component } from 'react';

/* Styles imports */
import './Créer.css';

/* Chat component */
class Créer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          Email: '',
          Passe: '',
          Adresse:'',
          Ville:'',
          Code:'',
          message: ''
        }
    }


    _changeEmail = (event) => {
      this.setState({email: event.target.value});
    }
  
    _changePasse = (event) => {
      this.setState({passe: event.target.value});
    }

    _changeAdresse = (event) => {
      this.setState({adresse: event.target.value});
    }
    
    _changeVille = (event) => {
      this.setState({ville: event.target.value});
    }
    _changeCode = (event) => {
      this.setState({code: event.target.value});
    }
    
    
 
  
    _submitData = () => {
      
      /* Check value */
      if(!this.state.Email || !this.state.Passe || !this.state.Adresse || !this.state.Ville || !this.state.Code) {
        return;
      }
  
      /* Request */
      var data =  {
        email: this.state.Email,
        passe: this.state.Passe,
        adresse: this.state.Adresse,
        ville : this.state.Ville,
        Code : this.state.Code

      }
  
      var options = {
        method: 'POST',
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
  
      fetch('http://localhost:8080/Cree/Cree', options)
      .then((res) => (res.json()))
      .then(
        (result) => {
          this.setState({message: result.message});
        },
        (_error) => {
          this.setState({message: "Une erreur s'est produite"});
        }
      )
    }
    
    
    
    render() {
        return (
  


  <form class="container" id="formulaire">
    <div class="form-row">
      < div class="form-group col-md-6">
        <label for="inputEmail4">Email</label>
          <input type="email" class="form-control" id="inputEmail4" placeholder="Email" onChange={this._changeEmail} value={this.state.email} required/>
    </div>
                      

      <div class="form-group col-md-6">
        <label for="inputPassword4">Mots Passe</label>
          <input type="password" class="form-control" id="inputPassword4" placeholder="Mots Passe"onChange={this._changePasse} value={this.state.passe} required/>
      </div>

        <div class="form-group col-md-6">
          <label for="inputAddress">Adresse</label>
            <input type="text" class="form-control" id="inputAddress" placeholder="Adresse"onChange={this._changeAdresse} value={this.state.adresse} required/>
        </div>

                            
          <div class="form-group col-md-6">
            <label for="inputCity">Ville</label>
              <input type="text" class="form-control" id="inputCity" placeholder="Ville"onChange={this._changeVille} value={this.state.ville} required/>
          </div>
                            

                  
            <div class="form-group col-md-6">
              <label for="inputZip">Code postale</label>
                <input type="text" class="form-control" id="inputZip" placeholder="code postale"onChange={this._changeCode} value={this.state.code} required/>
            </div>   
    </div> 
            <div class="form-row ">
              <div id="bouton">
                <button onClick={this._submitData} type="submit" class="btn btn-primary">Valide</button>
                <p>{this.state.message}</p>
            </div>
              </div>             
  </form>
 
        );
    }
}

export default Créer;