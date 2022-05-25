const express = require('express');
const router = express.Router();
const UserController = require('../controller/user.controller');

module.exports = function (){
    router.post('/register', UserController.registerUser);
    router.get('/users/:email', UserController.profileDetails);
    router.get('/', UserController.getAllUser);
    router.put('/update/:id', UserController.updateUser);
    router.delete('/delete/:id', UserController.deleteUser);
    
    return router;
}