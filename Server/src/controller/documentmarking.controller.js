const DocumentMarking = require("../modal/documentmarking.modal");

const createMarkingScheme = async (req, res) => {
  if (req.body) {
    const documentmarking = new DocumentMarking(req.body);
    await documentmarking
      .save()
      .then((data) => res.status(200).send({ data: data }))
      .catch((err) => res.status(500).send(err));
  }
};

const getAllMarkingSchemes = async (req, res) => {
  await DocumentMarking.find()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const getMarkingScheme = async (req, res) => {
  if (req.params.id) {
    console.log(req.params.id);
    await DocumentMarking.findById(req.params.id)
      .then((data) => {
        res.status(200).send({ data });
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  }
};

module.exports = {
  createMarkingScheme,
  getAllMarkingSchemes,
  getMarkingScheme,
};
