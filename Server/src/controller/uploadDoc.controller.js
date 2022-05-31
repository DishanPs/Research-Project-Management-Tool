const UploadDocument = require("../modal/uploadDoc.modal");

const addUpDoc = async (req, res) => {
  if (req.body) {
    const uploadDocument = new UploadDocument(req.body);
    await uploadDocument
      .save()
      .then((data) => res.status(200).send({ data: data }))
      .catch((err) => res.status(200).send(err));
  }
};

const getUpDoc = async (req, res) => {
  if (req.params.id) {
    console.log(req.params.id);
    await UploadDocument.findById(req.params.id)
      .then((data) => {
        res.status(200).send({ data });
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  }
};

const getAllUpDocs = async (req, res) => {
  await UploadDocument.find()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((error) => {
      res.send(error);
    });
};

const updateUpDoc = async (req, res) => {
  console.log(req.body);
  if (req.body) {
    let id = req.params.id;
    await UploadDocument.findByIdAndUpdate(id, req.body)
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.send(err);
      });
  }
};

const deleteUpDoc = async (req, res) => {
  await UploadDocument.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(200).send({ status: "Deleted" });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

module.exports = {
  addUpDoc,
  getUpDoc,
  getAllUpDocs,
  updateUpDoc,
  deleteUpDoc,
};
