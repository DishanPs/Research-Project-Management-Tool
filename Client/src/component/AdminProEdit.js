import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";

const StudentProEdit = ({ det }) => {
  const [validated, setvalidated] = useState(false);
  const [ids, setId] = useState(det.ID);
  const [fname, setFirstName] = useState(det.firstName);
  const [lname, setLastName] = useState(det.lastName);
  const [contactno, setContactNo] = useState(det.contactNo);
  const [nic, setNIC] = useState(det.NIC);

  const handleSubmit = (event) => {
    const updateStudent = {
      ID: ids,
      firstName: fname,
      lastName: lname,
      contactNo: contactno,
      NIC: nic,
    };
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      axios
        .put(`http://localhost:5000/admin/update/${det._id}`, updateStudent)
        .then(
          (data) => console.log(data),
          swal("Updated!", "Successfully Updated", "success")
        )
        .catch((err) => alert(err));
    }
    setvalidated(true);
  };

  return (
    <div className="editform">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="inputreg" controlId="iD">
          <Form.Label>Admin ID</Form.Label>
          <Form.Control
            placeholder="Enter your Admin ID"
            value={ids}
            onChange={(e) => setId(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="inputreg" controlId="fname">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            value={fname}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="inputreg" controlId="lname">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            value={lname}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="inputreg" controlId="contactno">
          <Form.Label>Contact No.</Form.Label>
          <Form.Control
            pattern="[0-9]{10}"
            value={contactno}
            onChange={(e) => setContactNo(e.target.value)}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please enter a valid phone number.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="inputreg" controlId="nic">
          <Form.Label>NIC</Form.Label>
          <Form.Control
            pattern="^([0-9]{9}[x|X|v|V]|[0-9]{12})$"
            value={nic}
            onChange={(e) => setNIC(e.target.value)}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please enter a valid NIC number.
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit">
          Save Changes
        </Button>
      </Form>
    </div>
  );
};

export default StudentProEdit;
