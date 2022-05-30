import Modal from "react-bootstrap/Modal";
import { ModalBody, ModalFooter } from "react-bootstrap";

import Button from "react-bootstrap/Button";
import swal from "sweetalert";

import axios from "axios";

const ModleStudentDelete = (props) => {
  const deleteStudent = () => {
    axios
      .delete(
        `http://localhost:5000/student/delete/${props.deleteAdminStudentView._id}`
      )
      .then(() => {
        swal("Deleted!", "Successfully Deleted", "success");
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <Modal
      {...props}
      size=""
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Delete a Student</Modal.Title>
      </Modal.Header>
      <ModalBody>
        Are you sure,do you want to delete this record.
        <br />
      </ModalBody>
      <ModalFooter>
        <Button onClick={deleteStudent} variant="danger">
          Delete
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ModleStudentDelete;
