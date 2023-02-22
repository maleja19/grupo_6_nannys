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
		res.render('users/RegistrarseNineras.ejs')
	},

	detail: (req,res) => {
		const{id}=req.params;
		const product=products.find(elem => elem.id ==parseInt(id));
		if(product){
			res.render('products/detalleProductos.ejs',{product})
		}

	},

	store: (req, res) => {

		const{img,nombres,apellidos,email,username,password,edad,nacionalidad,pais_de_residencia,ciudad_de_residencia,direccion,celular,descripcion,frase,precio,Aptitudes}=req.body;

		const newId=products[products.length-1].id+1;

		const image= req.file? req.file.filename : '';
		let newImage;

		
		
		if(image.lenght >0){
			newImage = `images/products/${image}`
		}

		const obj = {
			id:newId, 
			img:newImage,
			nombres,
			apellidos,
			email,
			username,
			password,
			edad,
			nacionalidad,
			pais_de_residencia,
			ciudad_de_residencia,
			direccion,
			celular,
			descripcion,
			frase,
			precio,
			Aptitudes

		}

		products.push(obj);
		res.redirect('/compras')
		
	},




}

module.exports= controller;
