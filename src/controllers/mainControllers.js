const path=require("path")


const home = (req,res)=>{
    res.render('home.ejs');
}

const mision=(req,res)=>{
    res.render('mision.ejs');
   
}



const login=(req,res)=>{
    res.render('users/loginIn.ejs');
}


const formEditParents=(req,res)=>{
    res.render('users/formEditParents.ejs');
}



module.exports={
    home,
    mision,
    login,   
    formEditParents,
   

};