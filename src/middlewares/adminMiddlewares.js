
function admin(req,res,next){
    
    if(req.session.userLogged && req.session.userLogged.admin==1 ){
        
        next();
    }else{

        res.status(401);
        return res.send('No Autorizado')
    }   
		
	}

module.exports=admin;