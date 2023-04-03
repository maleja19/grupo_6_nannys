function guestMiddlewares(req,res,next){
    if(req.session.userLogged){
        return res.redirect('/users/profile')
    }
    next();
}

module.exports=guestMiddlewares;