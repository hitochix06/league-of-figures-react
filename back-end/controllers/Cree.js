/*
 * Login controller
 */

 /* Models imports */
var Cree = require('../models/Cree');

var Cree = {

    createUser: (req, res) => {
        var data = req.body;

        if(!this.state.Email || !this.state.Passe || !this.state.Adresse || !this.state.Ville || !this.state.Code) {
            res.status(400).json({message: 'Veuillez compléter tous les champs'});
            return;
        }

        var newUser = new User({
            email: data.Email,
            passe: data.Passe,
            adresse: data.Adresse,
            ville: data.ville,
            Code  : data.code,
            admin: false
        });

        newUser.save((error) => {
            if(error) {
                res.status(500).json({message: "Une erreur s'est produite"});
                return;
                
            }

            res.json({message: 'Utilisateur créé'});
        });
        
        newUser.save();
    }
}





module.exports = Cree;