const express = require('express');
const productsController = require('../controllers/productsController');

const routerProducts = express.Router();

routerProducts.get('/compras', productsController.allgetProducts);


module.exports=routerProducts