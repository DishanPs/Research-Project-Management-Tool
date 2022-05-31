const PanelMember = require("../modal/panel.modal");

const assignPanel = async (req, res) => {
  if (req.body) {
    const panel = new PanelMember(req.body);
    await panel
      .save()
      .then((data) => res.status(200).send({ data: data }))
      .catch((err) => res.status(200).send(err));
  }
};

const getAllPanelDetails = async (req, res) => {
  await PanelMember.find()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((error) => {
      res.send(error);
    });
};

module.exports = {
  assignPanel,
  getAllPanelDetails,
};
