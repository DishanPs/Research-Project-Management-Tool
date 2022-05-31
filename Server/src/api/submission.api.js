const express = require('express');
const router = express.Router();
const UploadSubController = require('../controller/submission.controller');

module.exports = function (){
    router.post('/', UploadSubController.addSubDoc);
    router.get('/:id', UploadSubController.getSubDoc);
    router.put('/update/:id', UploadSubController.updateSubDoc);
    router.delete('/delete/:id', UploadSubController.deleteSubDoc);
    router.get('/', UploadSubController.getAllSubDocs);
    return router;
}