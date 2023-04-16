const express = require('express');
const productsController = require('../controllers/productsController');



const routerProducts = express.Router();

const validations=require('../middlewares/validationNinnerasMiddlewares')
const upload=require('../middlewares/multerMiddlewares')
const admin=require('../middlewares/adminMiddlewares')



routerProducts.get('/products/sign',validations, productsController.create);
routerProducts.post('/products/sign',upload.single('img'), productsController.store);
routerProducts.get('/products/compras', productsController.allgetProducts);
routerProducts.get('/products/:id/edit', productsController.edit);
routerProducts.get('/products/:id/', productsController.detail);
routerProducts.put('/:id/edit',upload.single('img'),productsController.update);
routerProducts.delete('/:id/borrar',admin, productsController.eliminar);

module.exports=routerProducts;
