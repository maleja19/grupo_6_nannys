const express = require('express');
const userAPIController = require('../controllers/userAPIControllers');


const routerApiUsers = express.Router();

routerApiUsers.get('/api/users',userAPIController.list)
routerApiUsers.get('/api/users/:id',userAPIController.detail)


module.exports= routerApiUsers;

