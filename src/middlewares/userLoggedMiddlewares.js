const User = require('../models/User')
function userLoggedMiddlewares(req,res,next){
    /*let emailInCookies = req.cookies.userEmail;
    let userFromCookie = User.findbyfield('email',emailInCookies)

    if(userFromCookie){
        req.session.userLogged = userFromCookie;
    }

   next();*/
}
module.exports=userLoggedMiddlewares;