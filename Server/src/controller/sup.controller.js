const Supervisor = require("../modal/sup.modal");

const requestSup = async (req, res) => {
  if (req.body) {
    const sup = new Supervisor(req.body);
    await sup
      .save()
      .then((data) => res.status(200).send({ data: data }))
      .catch((err) => res.status(200).send(err));
  }
};

const getAllSupRequests = async (req, res) => {
  await Supervisor.find()
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
    await Supervisor.findByIdAndUpdate(id, req.body)
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  }
};

module.exports = {
  requestSup,
  getAllSupRequests,
  updateStatus,
};
