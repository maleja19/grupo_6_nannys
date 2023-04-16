const fs = require('fs');
const path = require('path');
const User= require('../models/User');
const { validationResult }=require('express-validator');
const bcrypt =require('bcryptjs');
const { openDelimiter } = require('ejs');

const usersFilePath = path.join(__dirname, '../database/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const userControllers={
    create:(req,res)=>{
		
        res.render('users/registerParents.ejs')
    },

    data: (req, res) => {
	
		
		const resultvalidation = validationResult(req);

		if(resultvalidation.errors.length>0){

			return res.render('users/registerParents.ejs',{
				errors: resultvalidation.mapped(),
				oldData: req.body
			});

		}

		let userInDB =User.findbyfield('email', req.body.email)
		if(userInDB){

			return res.render('users/registerParents.ejs',{
				errors: {
					email:{
						msg:'Este email ya esta registrado',
					},
				oldData: req.body
					
				 }})
		}

		const image= req.file? req.file.filename :'';
		let newImage;
		
			
		if(image.length >0){
			newImage = `/images/${image}`;
		}
		
		let userToCreate={
			img:newImage,
			...req.body,
			password: bcrypt.hashSync(req.body.password,10)

		}

		

		let createUser=User.create(userToCreate)
		
		res.redirect('/users/login')
			
	},

	login:(req,res)=>{
        res.render('users/loginIn.ejs')
    },

	loginProcess:(req,res)=>{
		let userToLogin = User.findbyfield('email', req.body.email);
		

		if(userToLogin){

			let passwordIsTrue = bcrypt.compareSync(req.body.password,userToLogin.password);
			
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
	},

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