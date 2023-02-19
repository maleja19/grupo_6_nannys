const path=require("path")


const home = (req,res)=>{
    res.render('home.ejs');
}

const mision=(req,res)=>{
    res.render('mision.ejs');
   
}

const signInNineras=(req,res)=>{
    res.render('users/RegistrarseNineras.ejs');
   
}

const signInPadres=(req,res)=>{
    res.render('users/RegistrarseParents.ejs');
}

const login=(req,res)=>{
    res.render('users/loginIn.ejs');
}


const formEditNineras=(req,res)=>{
    res.render('users/formEditNineras.ejs');
}

const detalle=(req,res)=>{
    res.render('products/detalleProductos.ejs');
}

module.exports={
    home,
    mision,
    signInNineras,
    signInPadres,
    login,   
    formEditNineras,
    detalle

};