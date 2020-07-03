/* Module imports */
import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";


/* Styles imports */
import './Login.css';

/* Login component */
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email: '',
          passe: '',
          message: ''
        }
    }

    _changeEmail = (event) => {
      this.setState({email: event.target.value});
    }
  
    _changePasse = (event) => {
      this.setState({passe: event.target.value});
    }
  
    _submitData = () => {
      
      /* Check value */
      if(!this.state.passe || !this.state.email) {
        return;
      }
  
      /* Request */
      var data =  {
        email: this.state.Email,
        passe: this.state.Passe
      }
  
      var options = {
        method: 'POST',
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
  
      fetch('http://localhost:8080/Login/Login', options)
      .then((res) => (res.json()))
      .then(
        (result) => {
          this.setState({message: result.message});
        },
        (error) => {
          this.setState({message: "Une erreur s'est produite"});
        }
      )
    }
    
    
    
    render() {
        return (

<div className="container">
  

   <form id="login" onSubmit ={this.handleSubmit}>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputEmail4">Email</label>
                  <input type="email" value={this.state.email} onChange={this._changeEmail} class="form-control" id="inputEmail4" placeholder="Email"required/>
                </div>
              

                <div class="form-group col-md-6">
                  <label for="inputPassword4">Mots Passe</label>
                  <input type="password" value={this.state.passe} onChange={this._changePasse} class="form-control" id="inputPassword4" placeholder="Mots Passe"required/>
                </div>


                  <button onClick={this._submitData} type="submit" value="valide" class="btn btn-primary">Connection</button>
                  <p>{this.state.message}</p>
                  </div>
               

   </form>
               <div class="container1">
               <div class="nav" />
                    <ul class="navbar-nav ">
                      <li>
                      <Link class="link" to="/Créer">Créer un compte</Link>
                      </li>
                    </ul>  
                    </div>
  
</div>
    
        );
    }
}

export default Login;
             
             
              {/*  */} 
