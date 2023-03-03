const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../database/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {
	// Root - Show all products
	allgetProducts: (req, res) => {
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		res.render('products/compras.ejs',{'productos': products})
	},

	create: (req,res) => {
		res.render('users/RegistrarseNineras.ejs')
	},

	detail: (req,res) => {
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		const{id}=req.params;
		const product=products.find(elem => elem.id ==parseInt(id));
		
		if(product){
			res.render('products/detalleProductos.ejs',{product:product})
		}

		
	},

	store: (req, res) => {

		const{img,nombres,apellidos,email,username,password,edad,nacionalidad,pais_de_residencia,ciudad_de_residencia,direccion,celular,descripcion,frase,precio,aptitudes}=req.body;

		const newId=products[products.length-1].id+1;

		const image= req.file? req.file.filename : '';
		let newImage;
		
		
		
		if(image.length >0){
			newImage = `/images/${image}`;
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
			aptitudes

		}

		products.push(obj);
		console.log(obj)
		fs.writeFileSync(productsFilePath,JSON.stringify(products))
		res.redirect('/compras')
		
	},

	edit:(req,res)=>{
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		const {id}=req.params;

		const editProducts = products.find(elem=> elem.id ==id)

		res.render('products/formEditNineras.ejs',{editProducts})

	},

	update: (req, res) => {	
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

			
				
		products.forEach(elem => {		
			
						
			if(elem.id == req.params.id){
				elem.img = req.body.img?req.body.img:req.body.img;
				elem.nombre = req.body.nombre;
				elem.apellido=req.body.apellido;
				elem.email=req.body.email;
				elem.username=req.body.username;
				elem.password=req.body.password;
				elem.edad=req.body.edad;
				elem.pais_de_residencia=req.body.pais_de_residencia;
				elem.ciudad_de_residencia=req.body.ciudad_de_residencia;
				elem.direccion=req.body.direccion;
				elem.celular=req.body.celular;
				elem.descripcion=req.body.descripcion;
				elem.precio=req.body.precio;
				elem.frase=req.body.frase;
				elem.aptitudes=req.body.aptitudes;
			}	
				
					
				
			
		});

		
		fs.writeFileSync(productsFilePath,JSON.stringify(products))
		
		res.redirect('/compras')
	},

	delet: (req, res) => {

		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		const{id}=req.params;
		const product=products.find(elem => elem.id ==parseInt(id));

		delete product;

		
		fs.writeFileSync(productsFilePath,JSON.stringify(products))
		res.redirect('/compras')
	}

}

module.exports= controller;
