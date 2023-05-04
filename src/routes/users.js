const express = require('express');
const userController = require('../controllers/userController');


const routerUsers = express.Router();


const validations=require('../middlewares/validationMiddlewares')
const upload=require('../middlewares/multerMiddlewares')



routerUsers.get('/users/signp',validations,userController.create);
routerUsers.post('/users/signp',upload.single('img'),userController.data)

routerUsers.get('/users/login',userController.login);
routerUsers.post('/login-process',userController.loginProcess);
routerUsers.get('/users/profile',userController.profile);
routerUsers.get('/users/logout',userController.logout);



//routerUsers.get('/user/form-edit2', formEditParents);





module.exports = routerUsers;