const Evaluation = require("../modal/evaluation.modal");

const createEvaluation = async (req, res) => {
  if (req.body) {
    const evaluation = new Evaluation(req.body);
    await evaluation
      .save()
      .then((data) => res.status(200).send({ data: data }))
      .catch((err) => res.status(500).send(err));
  }
};

module.exports = {
  createEvaluation,
};
