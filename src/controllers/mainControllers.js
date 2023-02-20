const path=require("path")


const home = (req,res)=>{
    res.render('home.ejs');
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

const compras=(req,res)=>{
    res.render('products/compras.ejs');
}

const formEditNineras=(req,res)=>{
    res.render('users/formEditNineras.ejs');
}

const formEditParents=(req,res)=>{
    res.render('users/formEditParents.ejs');
}


const detalle=(req,res)=>{
    res.render('products/detalleProductos.ejs');
}


module.exports={
    home,
    signInNineras,
    signInPadres,
    login,
    compras,
    formEditNineras,
    formEditParents,
    detalle
};