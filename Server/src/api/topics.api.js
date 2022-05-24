const express = require('express');
const router = express.Router();
const TopicController = require('../controller/topics.controller');

module.exports = function (){
    router.post('/add', TopicController.registerTopic);
    router.get('/', TopicController.getAllTopics);
    return router;
}