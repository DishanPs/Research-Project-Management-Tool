import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";

const PanelAssignForm = () => {
  const [validated, setvalidated] = useState(false);
  const [gid, setGroupId] = useState("");
  const [gname, setGroupName] = useState("");
  const [pmember1, setPMember1] = useState("");
  const [pmember2, setPMember2] = useState("");
  const [topic, setResearchTopic] = useState("");

  const checkSubmit = (event) => {
    const newPanelAssign = {
      groupID: gid,
      groupName: gname,
      panelmember1: pmember1,
      panelmember2: pmember2,
      topic: topic,
    };

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      axios
        .post("http://localhost:5000/panel/add", newPanelAssign)
        .then(() =>
          swal("Success!", "Details Submitted Successfully!", "success")
        )
        .catch((err) => swal("Failed!", "Something Went Wrong!", "error"));
    }
    setvalidated(true);
  };

  return (
    <div>
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

        <Form.Group className="mb-3" controlId="pmember1">
          <Form.Label>Panel Member 1 Name</Form.Label>
          <Form.Control
            placeholder="Panel Member 1 Name"
            value={pmember1}
            onChange={(e) => setPMember1(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="pmember2">
          <Form.Label>Panel Member 2 Name</Form.Label>
          <Form.Control
            placeholder="Panel Member 2 Name"
            value={pmember2}
            onChange={(e) => setPMember2(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="topic">
          <Form.Label>Research Topic</Form.Label>
          <Form.Control
            placeholder="Research Topic"
            value={topic}
            onChange={(e) => setResearchTopic(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="outline-primary" type="submit">
          Assign
        </Button>
      </Form>
    </div>
  );
};

export default PanelAssignForm;
