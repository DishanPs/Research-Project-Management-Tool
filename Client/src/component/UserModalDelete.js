import React from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const UserModaldelete = (props) => {
  const navigate = useNavigate();
  const deluser = () => {
    if (props.type == "delete") {
      axios
        .delete(`http://localhost:5000/customer/delete/${props.profile._id}`)
        .then(() => {
          swal("Deleted!", "Successfully Deleted", "success");
          navigate("#login");
        })
        .catch((err) => {
          alert(err);
        });
    } else {
      sessionStorage.removeItem("token");
      navigate("/");
    }
  };
  
  const navigate1 = () => {
    navigate("#login");
  };

  return (
    <Modal
      {...props}
      size=""
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>
          {props.type == "delete" ? "Delete Account ?" : "Logout"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.type == "delete"
          ? "Are you sure you want to delete your account permanetly ?"
          : "Do you want to logout"}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={deluser}>
          {props.type == "delete" ? "Delete" : "Logout"}
        </Button>
        <Button variant="primary" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UserModaldelete;
