//const fs = require('fs');
const path = require('path');
const { validationResult }=require('express-validator');
const bcrypt =require('bcryptjs');
const db = require("../database/models/index");
const { Console } = require('console');

//const productsFilePath = path.join(__dirname, '../database/products.json');
//const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productsController = {
	// Root - Show all products
	allgetProducts: async(req, res) => {
		//const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		//res.render('products/babySitters.ejs',{'productos': products})

		
		try{	

		const product=await db.BabySitter.findAll()
		res.render('products/babySitters.ejs',{'productos':product})

		}catch(error){
		console.log(error)
	}
		
	},

	create: (req,res) => {
		res.render('products/registerBabySitters.ejs')
	},

	detail: (req,res) => {
		//const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		const{id}=req.params;
		const product=products.find(elem => elem.id ==parseInt(id));
		
		if(product){
			return res.render('products/detailProductos.ejs',{product:product})
		}

		
	},

	store: async(req, res) => {
		//const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

		//console.log(req)

		//console.log(req.body)
		const resultvalidation = validationResult(req);

		if(resultvalidation.errors.length>0){

			return res.render('products/registerBabySitters.ejs',{
				errors: resultvalidation.mapped() })
		}
		
		const{img,nombre,apellido,email,username,password,edad,paisDeResidencia,ciudad_de_residencias_id,direccion,celular,descripcion,frase,precio,aptitudes_id}=req.body;

		//const newId=products[products.length-1].id+1;

		const image= req.file? req.file.filename : '';
		let newImage;
		
		
		
		if(image.length >0){
			newImage = `/images/${image}`;
		}

		const obj = {
			//id:newId, 
			img:newImage,
			nombre,
			apellido,
			email,
			username,
			password: bcrypt.hashSync(password,10),
			edad,
			paisDeResidencia,
			ciudad_de_residencias_id,
			direccion,
			celular,
			descripcion,
			frase,
			precio,
			aptitudes_id

		}

		//products.push(obj);
		try{
			let dta=await(db.BabySitter.create(obj))
			console.log(dta)
		
		}catch(error){
			console.log(error,"soy catch")
		}
		//fs.writeFileSync(productsFilePath,JSON.stringify(products))
		res.redirect('/products/compras')
		
		
	},

	

	edit:(req,res)=>{
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		const {id}=req.params;
		const aptitudes=["creativa","organizada","comunicativa"]

		const editProducts = products.find(elem=> elem.id ==id)

		res.render('products/formEditNineras.ejs',{editProducts,aptitudes})

	},

	update: (req, res) => {	
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

		const image= req.file? req.file.filename : elem.img;
		let newImage;	
		
		
		if(image.length >0){
			newImage = `/images/${image}`;
		}
				
		products.forEach(elem => {		
			
						
			if(elem.id == req.params.id){
				elem.img = newImage;
				elem.nombre = req.body.nombre;
				elem.apellido=req.body.apellido;
				elem.email=req.body.email;
				elem.username=req.body.username;
				elem.password=req.body.password;
				elem.edad=req.body.edad;
				elem.paisDeResidencia=req.body.paisDeResidencia;
				elem.ciudadDeResidencia=req.body.ciudadDeResidencia;
				elem.direccion=req.body.direccion;
				elem.celular=req.body.celular;
				elem.descripcion=req.body.descripcion;
				elem.precio=req.body.precio;
				elem.frase=req.body.frase;
				elem.aptitudes=req.body.aptitudes;
			}	
				
					
				
			
		});

		
		fs.writeFileSync(productsFilePath,JSON.stringify(products))
		
		res.redirect('/products/compras')
	},

	eliminar: (req,res)=>{

		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		const id=req.params.id;
		const productsFilter=products.filter(elem => elem.id != id);
		
		
		
		fs.writeFileSync(productsFilePath,JSON.stringify(productsFilter))
			
		res.redirect('/products/compras')
	}

}

module.exports= productsController ;
