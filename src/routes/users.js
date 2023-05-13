const express = require('express');
const userController = require('../controllers/userController');


const routerUsers = express.Router();


const validations=require('../middlewares/validationMiddlewares')
const upload=require('../middlewares/multerMiddlewares')
const guest=require('../middlewares/guestMiddleware')
const restriction=require('../middlewares/restrictionPageMiddlewares')


routerUsers.get('/users/signp',guest,userController.create);
routerUsers.post('/users/signp',upload.single('img'),validations,userController.data)


routerUsers.get('/users/:id/edit',restriction,userController.edit);
routerUsers.put('/users/:id/edit',upload.single('img'),validations,userController.update);


routerUsers.get('/users/login',userController.login);
routerUsers.post('/login-process',userController.loginProcess);
routerUsers.get('/users/profile',userController.profile);
routerUsers.get('/users/logout',userController.logout);



//routerUsers.get('/user/form-edit2', formEditParents);





module.exports = routerUsers;