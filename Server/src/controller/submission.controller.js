const SubmitDocument = require("../modal/submission.modal");

const addSubDoc = async (req, res) => {
    if (req.body) {
        const submitDocument = new SubmitDocument(req.body);
        await submitDocument.save()
            .then(data => res.status(200).send({data: data}))
            .catch(err => res.status(200).send(err));
    }
}

const getSubDoc = async (req, res) => {
    if (req.params.id){
        console.log(req.params.id)
        await SubmitDocument.findById(req.params.id)
        .then((data) => {
            res.status(200).send({ data });
        })
        .catch((err) => {
            res.status(500).send(err);
        });
        }
}


const getAllSubDocs = async (req, res) => {
    await SubmitDocument.find()
        .then((data) => {
            res.status(200).send(data);
        })
        .catch(error => {
            res.send(error);
        });
}

const updateSubDoc = async (req, res) => {
    console.log(req.body)
    if (req.body) {
        let id = req.params.id;
        await SubmitDocument.findByIdAndUpdate(id, req.body)
            .then(data => {
                res.status(200).send(data);
            })
            .catch(err => {
                res.send(err);
            });
    }
}

const deleteSubDoc = async (req, res) => {
    await SubmitDocument.findByIdAndDelete(req.params.id)
      .then(() => {
        res.status(200).send({ status: "Deleted" });
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  };


module.exports = {
    addSubDoc,
    getSubDoc,
    getAllSubDocs,
    updateSubDoc,
    deleteSubDoc,
    
}