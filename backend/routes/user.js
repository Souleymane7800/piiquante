// Importation
const express = require('express');

// Importation du middleware/password
const password = require('../middleware/password');

const ctrlEmail = require('../middleware/ctrlEmail');

// Importation du controllers/user.js
const userCtrl = require('../controllers/user');
console.log('========CONTENU ROUTEuser'); //test
console.log(userCtrl); //test

// La fonction Router()
const router = express.Router();

// La route (endpoint) signup 
router.post('/signup', ctrlEmail, password, userCtrl.signup);

// La route (endpoint) login 
router.post('/login', userCtrl.login);

// Exportation du module
module.exports = router;

