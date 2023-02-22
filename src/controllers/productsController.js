const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../database/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {
	// Root - Show all products
	allgetProducts: (req, res) => {
		res.render('products/compras.ejs',{'productos': products})
	},

	create: (req,res) => {
		res.render('users/formEditNineras.ejs')
	},

	detail: (req,res) => {
		const{id}=req.params;
		const product=products.find(elem => elem.id ==parseInt(id));
		if(product){
			res.render('products/detalleProductos.ejs',{product})
		}

	}


}

module.exports= controller;
