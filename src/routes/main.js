const express = require('express');
const {home,mision,signInNineras,signInPadres,login, formEditNineras} = require('../controllers/mainControllers');



const routerMain = express.Router();

routerMain.get('/', home);

routerMain.get('/mision', mision);

routerMain.get('/sign', signInNineras);

routerMain.get('/signp', signInPadres);

routerMain.get('/login', login);



routerMain.get('/form-edit1', formEditNineras);






module.exports = routerMain;