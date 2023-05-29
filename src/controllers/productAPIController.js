const db = require("../database/models/index");



const productAPIController={

list: async(req, res) => {

    let babySitter= await db.BabySitter.findAll({
        include: ['babySitterAptitud']
    })

    let arrayAptitudes= await db.Aptitud.findAll()

    console.log(babySitter)

    let aptitudes=babySitter.map(sitter=>{return sitter.babySitterAptitud.aptitudes})

    let uniqueAptitudes=aptitudes.filter((aptitud, i) => i == 0 ? true : aptitudes[i - 1] != aptitud)

    const counterAptitud = uniqueAptitudes.map(apt => {
        return {aptitud: apt, count: 0};
    })

    counterAptitud.map((countApt, i) =>{
        const actualAptLength = aptitudes.filter(aptitud => aptitud === countApt.aptitud).length;         
        countApt.count = actualAptLength;   
    })

    localhost='http://localhost:3030',


    res.status(200).json({
        total:babySitter.length,  
        totalAptitudes:arrayAptitudes.length,
        countByAptitud: counterAptitud,
        data: babySitter.map(sitter=>{return{
            id: sitter.id,
            nombre: sitter.nombre,
            descripcion: sitter.descripcion,
            aptitudes: sitter.babySitterAptitud.aptitudes,
            detail: (localhost+'/api/products/'+sitter.id)
        }})
   
    })   

},
           
 

detail: (req,res)=>{
    const {id}=req.params;
    let ruta='http://localhost:3030'
    db.BabySitter.findOne({include:['babySitterCiudad','babySitterAptitud'],where:{id:id}})
        .then(sitter=>res.status(200).json(
        {
            id: sitter.id,
            img:ruta+''+sitter.img,
            nombre:sitter.nombre,
            apellido:sitter.apellido,
            email:sitter.email,
			username:sitter.username,
            edad:sitter.edad,
			paisDeResidencia: sitter.paisDeResidencia,
			ciudad_de_residencias_id:sitter.babySitterCiudad.ciudad,
			direccion: sitter.direccion,
			celular:sitter.celular,
			descripcion: sitter.descripcion,
			frase:sitter.frase,
			aptitudes_id:sitter.babySitterAptitud.aptitudes,
			precio:sitter.precio



        }
    ))
}
       
                 
}          
    


module.exports=productAPIController;