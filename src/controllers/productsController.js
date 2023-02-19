const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../database/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {
	// Root - Show all products
	allgetProducts: (req, res) => {
		res.render('products/compras.ejs',{'productos': products})
	},

}

module.exports= controller;
