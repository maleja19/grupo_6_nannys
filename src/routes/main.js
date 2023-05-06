const express = require('express');
const {home, about,formEditParents} = require('../controllers/mainControllers');


const routerMain = express.Router();

routerMain.get('/', home);
routerMain.get('/about', about);









module.exports = routerMain;