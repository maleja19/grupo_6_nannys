const express = require('express');
const {home, about,formEditParents} = require('../controllers/mainControllers');


const routerMain = express.Router();

routerMain.get('/', home);
routerMain.get('/about', about);



//routerMain.get('/form-edit2', formEditParents);





module.exports = routerMain;