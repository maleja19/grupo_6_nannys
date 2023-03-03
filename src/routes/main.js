const express = require('express');
const {home, mision,signInPadres,login,formEditNineras, formEditParents} = require('../controllers/mainControllers');


const routerMain = express.Router();

routerMain.get('/', home);

routerMain.get('/mision', mision);

routerMain.get('/signp', signInPadres);

routerMain.get('/login', login);

routerMain.get('/form-edit2', formEditParents);





module.exports = routerMain;