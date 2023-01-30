const path=require("path")


const home = (req,res)=>{
    res.sendFile(path.join(__dirname,'../views/home.html'));
}

const signInNineras=(req,res)=>{
    res.sendFile(path.join(__dirname,'../views/RegistrarseNineras.html'));
   
}

const signInPadres=(req,res)=>{
    res.sendFile(path.join(__dirname,'../views/RegistrarseParents.html'));
}

const login=(req,res)=>{
    res.sendFile(path.join(__dirname,'../views/loginIn.html'));
}

const compras=(req,res)=>{
    res.sendFile(path.join(__dirname, '../views/compras.html'));
}



module.exports={
    home,
    signInNineras,
    signInPadres,
    login,
    compras
};