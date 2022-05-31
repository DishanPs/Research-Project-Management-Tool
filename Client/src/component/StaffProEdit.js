import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";

const StaffProEdit = ({ det }) => {
  const [validated, setvalidated] = useState(false);
  const [ids, setId] = useState(det.ID);
  const [fname, setFirstName] = useState(det.firstName);
  const [lname, setLastName] = useState(det.lastName);
  const [contactno, setContactNo] = useState(det.contactNo);
  const [nic, setNIC] = useState(det.NIC);
  const [interest, setInterest] = useState(det.researchInterest);
  const [fclty, setFaculty] = useState(det.faculty);

  const handleSubmit = (event) => {
    const updateUser = {
      ID: ids,
      firstName: fname,
      lastName: lname,
      contactNo: contactno,
      NIC: nic,
      researchInterest: interest,
      faculty: fclty,
    };
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      axios
        .put(`http://localhost:5000/staff/update/${det._id}`, updateUser)
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
          <Form.Label>Staff ID</Form.Label>
          <Form.Control
            placeholder="Enter your staff ID"
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

        <Form.Group className="inputreg" controlId="interest">
          <Form.Label>Research Interest</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Enter your research interest"
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="inputreg">
          <Form.Label>Faculty</Form.Label>
          <Form.Select
            aria-label="Feedback Type"
            value={fclty}
            onChange={(e) => setFaculty(e.target.value)}
          >
            <option selected disabled hidden>
              Faculty Type
            </option>
            <option>Select your faculty</option>
            <option>Computing</option>
            <option>Bussiness</option>
            <option>Engineering</option>
            <option>Humanaties and sciences</option>
            <option>School of Architecture</option>
            <option>Graduate studies and reseach</option>
            <option>School of Law</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit">
          Save Changes
        </Button>
      </Form>
    </div>
  );
};

export default StaffProEdit;
