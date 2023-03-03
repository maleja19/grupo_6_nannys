const express = require('express');
const productsController = require('../controllers/productsController');
const path = require('path')
const multer=require('multer')

const routerProducts = express.Router();

const storage= multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,path.join(__dirname,'../../public/images'))

    },
    filename:(req,file,cb)=>{
        const newFile=`product-${Date.now()}_img${path.extname(file.originalname)}`
        cb(null,newFile);

    }
});

const upload =multer({storage});

routerProducts.get('/compras', productsController.allgetProducts);

routerProducts.get('/sign', productsController.create);

routerProducts.get('/:id/', productsController.detail);

routerProducts.post('/new-ninera',upload.single('img'), productsController.store);

routerProducts.get('/:id/edit', productsController.edit);
routerProducts.put('/:id/edit', upload.single('img'),productsController.update);

routerProducts.delete('/:id/borrar', productsController.delet);

module.exports=routerProducts
