const Topic = require("../modal/topics.modal");

const registerTopic = async (req, res) => {
  if (req.body) {
    const topic = new Topic(req.body);
    await topic
      .save()
      .then((data) => res.status(200).send({ data: data }))
      .catch((err) => res.status(200).send(err));
  }
};

const getAllTopics = async (req, res) => {
  await Topic.find()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((error) => {
      res.send(error);
    });
};

const updateStatus = async (req, res) => {
  console.log(req.body);
  if (req.body) {
    let id = req.params.id;
    await Topic.findByIdAndUpdate(id, req.body)
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  }
};

module.exports = {
  registerTopic,
  getAllTopics,
  updateStatus,
};
