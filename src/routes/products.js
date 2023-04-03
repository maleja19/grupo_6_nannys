const express = require('express');
const productsController = require('../controllers/productsController');



const routerProducts = express.Router();

const validations=require('../middlewares/validationNinnerasMiddlewares')
const upload=require('../middlewares/multerMiddlewares')




routerProducts.get('/products/compras', productsController.allgetProducts);

routerProducts.get('/products/sign', productsController.create);

routerProducts.get('/products/:id/', productsController.detail);

routerProducts.post('/new-ninera',upload.single('img'), validations,productsController.store);


routerProducts.get('/products/:id/edit', productsController.edit);
routerProducts.put('/:id/edit', upload.single('img'),productsController.update);

routerProducts.delete('/:id/borrar', productsController.eliminar);

module.exports=routerProducts
