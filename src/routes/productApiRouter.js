const express = require('express');
const productAPIController = require('../controllers/productAPIController');


const routerApiproduct = express.Router();

routerApiproduct.get('/api/products/',productAPIController.list)
routerApiproduct.get('/api/products/:id',productAPIController.detail)

module.exports=routerApiproduct;    