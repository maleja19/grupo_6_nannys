//const fs = require('fs');
const path = require('path');
const { validationResult }=require('express-validator');
const bcrypt =require('bcryptjs');
const db = require("../database/models/index");
const { Model, where } = require('sequelize');




const productsController = {
	// Root - Show all products
	allgetProducts: async(req, res) => {
		
		try{

		const product=await db.BabySitter.findAll({include:[{model:db.Aptitud,as:'babySitterAptitud'}]})
		console.log(product)
		res.render('products/babySitters.ejs',{'productos':product})}
		catch(error){
			console.log(error)
		}

	},

	search: async(req,res)=>{

		const findBabbySitter= req.body.search;
		try{		
		

		const products= await db.BabySitter.findAll({include:[{model:db.Aptitud,as:'babySitterAptitud'}],where:{nombre:findBabbySitter}})
	

		res.render('products/babySitters.ejs',{'productos':products})
		}	
		catch(error){
			console.log(error)
		}

		
			
	},		
	

	create: (req,res) => {
		res.render('products/registerBabySitters.ejs')
	},

	detail: async (req,res) => {

		const IdProduct=req.params.id
		try{	
			
			const product=await db.BabySitter.findByPk(IdProduct, {include:[{model:db.Aptitud,as:'babySitterAptitud'}]})
			
		
		if(product){
			return res.render('products/detailProductos.ejs',{product})
		}

		}catch(error){
			console.log(error)
		}
		
		

		
	},

	store: async(req, res) => {
		
		const resultvalidation = validationResult(req);

		if(resultvalidation.errors.length>0){
			return res.render('products/registerBabySitters.ejs',{
				errors: resultvalidation.mapped(),
				
				oldData: req.body})
		}
		

		const userFind= await db.BabySitter.findAll({where: {email:req.body.email}})
			
		if(userFind.length>0){
		return res.render('products/registerBabySitters.ejs',{
			errors:{
				email: {
					msg: 'El email ya registra en nuestra base de datos'
				}
			}
		})}
		
		const{img,nombre,apellido,email,username,password,edad,paisDeResidencia,ciudad_de_residencias_id,direccion,celular,descripcion,frase,precio,aptitudes_id}=req.body;

		//console.log("Imprimiré las aptitudes");
		

		//const newId=products[products.length-1].id+1;

		const image= req.file? req.file.filename : '';
		let newImage;
		
		
		
		if(image.length >0){
			newImage = `/images/${image}`;
		}
		
		try{
		let aptitudes = await db.Aptitud.findByPk(aptitudes_id)
			console.log(aptitudes)
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
			aptitudes_id:aptitudes.id,
			precio
			
			
			}	
		
			
			let dta=await(db.BabySitter.create(obj,{include:[{model:db.Aptitud,as:'babySitterAptitud'}]}))
		}
	
		
		catch(error){
			console.log(error,"soy catch")
		}
		//fs.writeFileSync(productsFilePath,JSON.stringify(products))
		res.redirect('/products/compras')
		//console.log(aptitudes);
	},

	

	edit:async(req,res)=>{
		//const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		const babySitterId=req.params.id;
		
		const editProducts = await db.BabySitter.findByPk(parseInt(babySitterId))
	

		res.render('products/formEditNineras.ejs',{editProducts})

	},

	update: async(req, res) => {	
		//const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

		const resultvalidation = validationResult(req);

		if(resultvalidation.errors.length>0){
			return res.render('products/formEditNineras.ejs',{
				errors: resultvalidation.mapped(),
				editProducts: req.body
			})
		}

		
		const image= req.file? req.file.filename :'';
		let newImage;
		
		
		
		if(image.length >0){
			newImage = `/images/${image}`;
		}
		

		
	
			//let aptitudes = await db.Aptitud.findByPk(aptitudes_id)	

		const{img,nombre,apellido,email,username,password,edad,paisDeResidencia,ciudad_de_residencias_id,direccion,celular,descripcion,frase,precio,aptitudes_id}=req.body;

		const editBabySitter={
				img : newImage,
				nombre,
				apellido,
				email,
				username,
				password:bcrypt.hashSync(password,10),
				edad,
				paisDeResidencia,
				ciudad_de_residencias_id,
				direccion,
				celular,
				descripcion,
				precio,
				frase,
				aptitudes_id
			}
		
		try{
		await db.BabySitter.update(editBabySitter,{where:{id:req.params.id}});
		}catch(error){
			console.log(error)
		}

		
				
		res.redirect('/products/compras')
	},

	destroy: async(req,res)=>{

		
		const babySitterId=req.params.id;

		try{
		
		
		await db.BabySitter.destroy({where:{id:babySitterId}, force: true})


		}catch(error)
		{console.log(error)}
		
		
		
		
			
		res.redirect('/products/compras')
	}



}

module.exports= productsController ;
