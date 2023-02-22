const express = require('express');
const productsController = require('../controllers/productsController');

const routerProducts = express.Router();

routerProducts.get('/compras', productsController.allgetProducts);

routerProducts.get('/sign', productsController.create);

routerProducts.get('/:id/', productsController.detail);


module.exports=routerProducts
