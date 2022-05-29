const PresentationMarking = require("../modal/presentationmarking.modal");

const createMarkingScheme = async (req, res) => {
  if (req.body) {
    const presentationmarking = new PresentationMarking(req.body);
    await presentationmarking
      .save()
      .then((data) => res.status(200).send({ data: data }))
      .catch((err) => res.status(500).send(err));
  }
};

const getAllMarkingSchemes = async (req, res) => {
  await PresentationMarking.find()
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
    await PresentationMarking.findById(req.params.id)
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
