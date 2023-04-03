const express = require('express');
const userController = require('../controllers/userController');


const routerUsers = express.Router();


const guestMiddlewares=require('../middlewares/guestMiddlewares')
const authMiddlewares=require('../middlewares/authMiddlewares')
const validations=require('../middlewares/validationMiddlewares')
const upload=require('../middlewares/multerMiddlewares')



routerUsers.get('/users/signp',guestMiddlewares,userController.create);

routerUsers.post('/new-user',upload.single('img'),validations,userController.data)

routerUsers.get('/users/login',guestMiddlewares,userController.login);
routerUsers.post('/login-process',userController.loginProcess);

routerUsers.get('/users/profile',authMiddlewares,userController.profile);
routerUsers.get('/users/logout',userController.logout);



/*routerUsers.get('/user/form-edit2', formEditParents);*/





module.exports = routerUsers;