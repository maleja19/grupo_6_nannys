const express = require('express');
const userAPIController = require('../controllers/userAPIControllers');


const routerApiUsers = express.Router();

routerApiUsers.get('/api/users',userAPIController.list)
routerApiUsers.get('/api/users/detail/:id',userAPIController.detail)
routerApiUsers.get('/api/users/:id',userAPIController.findId)

module.exports= routerApiUsers;

