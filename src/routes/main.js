const express = require('express');
const {home, mision,signInNineras,signInPadres,login,formEditNineras, formEditParents, detalle} = require('../controllers/mainControllers');


const routerMain = express.Router();

routerMain.get('/', home);

routerMain.get('/mision', mision);

routerMain.get('/signp', signInPadres);

routerMain.get('/login', login);

routerMain.get('/form-edit1', formEditNineras);

routerMain.get('/form-edit2', formEditParents);





module.exports = routerMain;