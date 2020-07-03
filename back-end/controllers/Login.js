/*
 * Login controller
 */

function checkPasswordRequirements(password, credentials, response) {
    var passwordRegex = /^[a-z0-9]+$/i;

    if(password.length < 8) {
        response.connected = false;
        response.message = "Le mot de passe doit contenir au moins 8 caratères";
    }
    else if(passwordRegex.test(password)) {
        response.connected = false;
        response.message = "Le mot de passe doit contenir au moins un symbole spécial";
    }
    else if(password != credentials.password){
        response.connected = false;
        response.message = "Mauvais mot de passe";
    }
    else {
        response.connected = true;
        response.message = "Vous êtes connecté";
    }

    return response;
}


var Login = {

    checkLogin: (req) => {
        var email = req.body.email;
        var passe = req.body.passe;
        var credentials = {
            email: "pachara.philibert@hotmail.fr",
            passe: "AZERTYUIOP1234567890#"
        }
        var response = {email};
        

        if(email == credentials.email) {
            response = checkPasswordRequirements(passe, credentials, response)
        }
        else {
            response.connected = false;
            response.message = "Mauvais nom d'utilisateur";
        }

        return response;


    }
}



module.exports = Login;