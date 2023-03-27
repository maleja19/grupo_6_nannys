const express = require('express');
const {home, mision,formEditParents} = require('../controllers/mainControllers');


const routerMain = express.Router();

routerMain.get('/', home);

routerMain.get('/mision', mision);



routerMain.get('/form-edit2', formEditParents);





module.exports = routerMain;