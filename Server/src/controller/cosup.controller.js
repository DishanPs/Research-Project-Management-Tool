const CoSupervisor = require("../modal/cosup.modal");

const requestCoSup = async (req, res) => {
  if (req.body) {
    const cosup = new CoSupervisor(req.body);
    await cosup
      .save()
      .then((data) => res.status(200).send({ data: data }))
      .catch((err) => res.status(200).send(err));
  }
};

const getAllCoSupRequests = async (req, res) => {
  await CoSupervisor.find()
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
    await CoSupervisor.findByIdAndUpdate(id, req.body)
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  }
};

module.exports = {
  requestCoSup,
  getAllCoSupRequests,
  updateStatus,
};
