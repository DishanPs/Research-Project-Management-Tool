const Topic = require("../modal/topics.modal");


const registerTopic = async (req, res) => {
    if (req.body) {
        const topic = new Topic(req.body);
        await topic.save()
            .then(data => res.status(200).send({data: data}))
            .catch(err => res.status(200).send(err));
    }
}


const getAllTopics = async (req, res) => {
    await Topic.find()
        .then((data) => {
            res.status(200).send(data);
        })
        .catch(error => {
            res.send(error);
        });
}


module.exports = {
    registerTopic,
    getAllTopics,
    
    
}