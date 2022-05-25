const express = require('express');
const router = express.Router();
const AdminController = require('../controller/admin.controller');

module.exports = function (){

    router.get('/admins/:email', AdminController.profileDetails);
    return router;
}