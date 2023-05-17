const fs = require('fs');
const path = require('path');
//const User= require('../models/User');
const { validationResult }=require('express-validator');
const bcrypt =require('bcryptjs');
const { openDelimiter } = require('ejs');
const db = require("../database/models/index");
const { error } = require('console');

//const usersFilePath = path.join(__dirname, '../database/users.json');
//const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const userControllers={
    create:(req,res)=>{
		
        res.render('users/registerParents.ejs')
    },

    data: async(req, res) => {
	
		
		const resultvalidation = validationResult(req);
		
		if(resultvalidation.errors.length>0){

			return res.render('users/registerParents.ejs',{
				errors: resultvalidation.mapped(),
				oldData: req.body
			});

		}

		try{

		const userFind= await db.User.findAll({where: {email:req.body.email}})
			
		if(userFind.length>0){
		return res.render('users/registerParents.ejs',{
			errors:{
				email: {
					msg: 'El email ya registra en nuestra base de datos'
				}
			}
		})}

		
	      

		const image= req.file? req.file.filename :'';
		let newImage;
		
			
		if(image.length >0){
			newImage = `/images/${image}`;
		}

		
		const{img,nombre,apellido,email,username,password,paisDeResidencia,ciudad_de_residencias_id,direccion,movil,pregunta}=req.body;

		let answer;

		if(pregunta=='si'){
			answer=true
		}

		else if(pregunta=='no'){
			answer=false
		}

		console.log(answer)
		
		let userToCreate={
			img:newImage,
			nombre,
			apellido,
			email,
			username,
			password: bcrypt.hashSync(password,10),
			paisDeResidencia,
			ciudad_de_residencias_id,
			direccion,
			movil,
			pregunta:answer
				

		}

		
		
			await db.User.create(userToCreate)	
	
		
					
		} catch (error) {
			console.log(error)
		}
		
		res.redirect('/users/login')
			
	},

	edit:async(req,res)=>{
		//const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

		const userId=req.params.id;		

		

		try{
		
		const editUsers = await db.User.findByPk(parseInt(userId));
		



		res.render('users/formEditParents.ejs',{editUsers})

		}catch(error){
			console.log(error)
		}
	},

	update: async(req, res) => {	
		//const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

		const resultvalidation = validationResult(req);
		
		if(resultvalidation.errors.length>0){

			return res.render('users/formEditParents.ejs',{
				errors: resultvalidation.mapped(),
				editUsers: req.body				
			})	
			

		}

		const image= req.file? req.file.filename : '';
		let newImage;	
		
		
		if(image.length >0){
			newImage = `/images/${image}`;
		}

		
		

		const{img,nombre,apellido,email,username,password,paisDeResidencia,ciudad_de_residencias_id,direccion,movil,pregunta}=req.body;

		let answer;
		
		if(pregunta=='si'){
			answer=true
		}
		else if(pregunta=='no'){
			answer=false
		}

		

			
		const userEdit=	
						
			{
				img:newImage,
				nombre,
				apellido,
				email,
				username,
				password: bcrypt.hashSync(password,10),
				paisDeResidencia,
				ciudad_de_residencias_id,
				direccion,
				movil,
				pregunta:answer
				
			}

		
				
	try{			
			await db.User.update(userEdit,{where:{id:req.params.id}})	
			
				

	}catch(error){
		console.log(error,'soy catch')
	}
		//fs.writeFileSync(productsFilePath,JSON.stringify(products))
	
		res.send('Usuario editado')
	},

	login:(req,res)=>{
        res.render('users/loginIn.ejs')
    },

	loginProcess: async(req,res)=>{
		try{
			
			const userToLogin= await db.User.findAll({where: {email:req.body.email}})
        //let userToLogin=allUsers.find(oneUser=>oneUser["email"]==req.body.email)
		
		console.log(userToLogin)

		if(userToLogin){

			const passwordIsTrue = bcrypt.compareSync(req.body.password,userToLogin[0].password);
			
			
			if(passwordIsTrue){
				delete userToLogin.password;
				req.session.userLogged=userToLogin;
				
				return res.redirect('users/profile')
			}	
			return res.render('users/loginIn.ejs',{
				errors:{
					email: {
						msg: 'Las credenciales son invalidas'
					}
				}
			})
		}
		return res.render('users/loginIn.ejs',{
			errors:{
				email: {
					msg: 'No se encuentra este email en nuestra base de datos'
				}
			}
		})
	}catch(error){
		console.log(error)
	}},

	profile:(req,res)=>{
		
		res.render('users/profile.ejs',{
			user: req.session.userLogged,
			
		})

		
	},

	

	logout:(req,res)=>{
		req.session.destroy()
		return res.redirect('/')
	}
		
	}
	


//console.log(userControllers.loginProcess())

module.exports=userControllers;