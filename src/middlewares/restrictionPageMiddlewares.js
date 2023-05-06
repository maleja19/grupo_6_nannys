
function restriction(req,res,next){
    
    if(req.session.userLogged && req.session.userLogged ){
        
        next();
    }else{

        res.status(401);
        return res.send('No Autorizado')
    }   
		
	}

module.exports=restriction;