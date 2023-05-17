const express = require('express');
const productAPIController = require('../controllers/productAPIController');


const routerApiproduct = express.Router();

routerApiproduct.get('/api/products/',productAPIController.list)
routerApiproduct.get('/api/product/detail/:id',productAPIController.detail)

module.exports=routerApiproduct;    