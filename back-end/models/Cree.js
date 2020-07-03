/* 
* User Modele
*/

/* Mongoose import */
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema ({
    email: String,
    passe: String,
    adresse: String,
    ville: String,
    code: Number,
    admin: Boolean,
    
    
});

module.exports =  mongoose.model('Cree', UserSchema);