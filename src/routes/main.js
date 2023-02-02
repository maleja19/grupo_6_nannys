const express = require('express');
const {home,signInNineras,signInPadres,login,compras, formEditNineras} = require('../controllers/mainControllers');

const routerMain = express.Router();

routerMain.get('/', home);

routerMain.get('/sign', signInNineras);

routerMain.get('/signp', signInPadres);

routerMain.get('/login', login);

routerMain.get('/compras', compras);

routerMain.get('/form-edit1', formEditNineras);






module.exports = routerMain;