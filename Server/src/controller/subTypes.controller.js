const SubType = require("../modal/subTypes.modal");

const addSubType = async (req, res) => {
  if (req.body) {
    const subType = new SubType(req.body);
    await subType
      .save()
      .then((data) => res.status(200).send({ data: data }))
      .catch((err) => res.status(200).send(err));
  }
};

const getSubType = async (req, res) => {
  if (req.params.id) {
    console.log(req.params.id);
    await SubType.findById(req.params.id)
      .then((data) => {
        res.status(200).send({ data });
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  }
};

const getAllSubTypes = async (req, res) => {
  await SubType.find()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((error) => {
      res.send(error);
    });
};

const updateSubType = async (req, res) => {
  console.log(req.body);
  if (req.body) {
    let id = req.params.id;
    await SubType.findByIdAndUpdate(id, req.body)
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.send(err);
      });
  }
};

const deleteSubType = async (req, res) => {
  await SubType.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(200).send({ status: "Deleted" });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

module.exports = {
  addSubType,
  getSubType,
  getAllSubTypes,
  updateSubType,
  deleteSubType,
};
