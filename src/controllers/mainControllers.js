const path=require("path")


const home = (req,res)=>{
    res.render('home.ejs');
}

const about=(req,res)=>{
    res.render('about.ejs');
   
}

const formEditParents=(req,res)=>{
    res.render('users/formEditParents.ejs');
}



module.exports={
    home,
    about,   
    formEditParents,
   

};