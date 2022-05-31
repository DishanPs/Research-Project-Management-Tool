import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import StudentSideNavBar from "./StudentSideNavBar";

const RequestSup = () => {
  const [validated, setvalidated] = useState(false);
  const [gid, setGroupId] = useState("");
  const [gname, setGroupName] = useState("");
  const [field, setResearchField] = useState("");
  const [supname, setSupName] = useState("");

  const checkSubmit = (event) => {
    const newSupRequest = {
      groupID: gid,
      groupName: gname,
      field: field,
      supervisorName: supname,
      status: "Pending",
    };

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      axios
        .post("http://localhost:5000/sup/request", newSupRequest)
        .then(() => swal("Success!", "Request Sent Successfully!", "success"))
        .catch((err) => swal("Failed!", "Something Went Wrong!", "error"));
    }
    setvalidated(true);
  };

  return (
    <div
      style={{
        backgroundImage: `url("https://wallpaperaccess.com/full/1616109.jpg")`,
        height: "100vh",
        backgroundSize: "cover",
      }}
    >
      <StudentSideNavBar />
      <center>
        <h2 style={{ color: "white" }}>Request a Supervisor</h2>
      </center>

      <div className="topicregform">
        <Form noValidate validated={validated} onSubmit={checkSubmit}>
          <Form.Group className="mb-3" controlId="gid">
            <Form.Label>Group ID</Form.Label>
            <Form.Control
              placeholder="Group ID"
              value={gid}
              onChange={(e) => setGroupId(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="gname">
            <Form.Label>Group Name</Form.Label>
            <Form.Control
              placeholder="Group Name"
              value={gname}
              onChange={(e) => setGroupName(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="supname">
            <Form.Label>Supervisor Name</Form.Label>
            <Form.Control
              placeholder="Supervisor Name"
              value={supname}
              onChange={(e) => setSupName(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="topic">
            <Form.Label>Research Field</Form.Label>
            <Form.Control
              placeholder="Research Field"
              value={field}
              onChange={(e) => setResearchField(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      <br />
    </div>
  );
};

export default RequestSup;
