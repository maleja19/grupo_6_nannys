const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../database/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const userControllers={
    create:(req,res)=>{
        res.render('users/RegistrarseParents.ejs')
    },

    data: (req, res) => {

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
            password,
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
}

module.exports=userControllers;