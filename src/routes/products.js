const express = require('express');
const productsController = require('../controllers/productsController');



const routerProducts = express.Router();

const upload=require('../middlewares/multerMiddlewares')
const admin=require('../middlewares/adminMiddlewares')
const validations=require('../middlewares/validationMiddlewares')
const restriction=require('../middlewares/restrictionPageMiddlewares')



routerProducts.get('/products/sign', productsController.create);
routerProducts.post('/products/sign',upload.single('img'),validations,productsController.store);
routerProducts.get('/products/compras', productsController.allgetProducts);

    

routerProducts.get('/products/:id/edit_delete',restriction,productsController.edit);
routerProducts.get('/products/:id/',restriction, productsController.detail);
routerProducts.put('/products/:id/edit',upload.single('img'),validations,productsController.update);
routerProducts.delete('/products/:id/delete',admin,productsController.destroy);

routerProducts.post('/products/buscar', productsController.search);

module.exports=routerProducts;
