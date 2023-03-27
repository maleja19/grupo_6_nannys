const fs = require('fs');
const path = require('path');
const { validationResult }=require('express-validator');
const bcrypt =require('bcryptjs');

const usersFilePath = path.join(__dirname, '../database/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const userControllers={
    create:(req,res)=>{
        res.render('users/RegistrarseParents.ejs')
    },

    data: (req, res) => {

		const resultvalidation = validationResult(req);

		if(resultvalidation.errors.length>0){

			res.render('users/RegistrarseParents.ejs',{
				errors: resultvalidation.mapped() })
		}

		const{img,nombre,apellido,email,username,password,nacionalidad,pais_de_residencia,ciudad_de_residencia,direccion,movil,pregunta,dudas}=req.body;

		const newId=users[users.length-1].id+1;

		const image= req.file? req.file.filename : '';
		let newImage;
		
		
		
		if(image.length >0){
			newImage = `/images/${image}`;
		}

		const obj = {
			id:newId, 
			img:newImage,
			nombre,
			apellido,
			email,
			username,
            password: bcrypt.hashSync(password,10),
            nacionalidad,
            pais_de_residencia,
            ciudad_de_residencia,
            direccion,
            movil,
            pregunta,
            dudas

		}

		users.push(obj);
		fs.writeFileSync(usersFilePath,JSON.stringify(users))
		res.send("usuario creado")
		
	},

	login:(req,res)=>{
        res.render('users/loginIn.ejs')
    },
}

module.exports=userControllers;