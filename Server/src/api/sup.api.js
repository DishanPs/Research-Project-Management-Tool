const express = require('express');
const router = express.Router();
const SupController = require('../controller/sup.controller');

module.exports = function (){
    router.post('/request', SupController.requestSup);
    router.get('/', SupController.getAllSupRequests);
    return router;
}