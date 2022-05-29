import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const EvaluationForm = (props) => {
  const token = JSON.parse(sessionStorage.getItem("token"));
  const [validated, setValidated] = useState(false);
  const [eemail, setEEmail] = useState("");
  const [eid, setEID] = useState("");
  const [gid, setGID] = useState("");
  const [markingname, setMarkingName] = useState("");
  const [criteria1, setCriteria1] = useState("");
  const [c1marks, setC1Marks] = useState("");
  const [c1emarks, setC1EMarks] = useState("");
  const [criteria2, setCriteria2] = useState("");
  const [c2marks, setC2Marks] = useState("");
  const [c2emarks, setC2EMarks] = useState("");
  const [criteria3, setCriteria3] = useState("");
  const [c3marks, setC3Marks] = useState("");
  const [c3emarks, setC3EMarks] = useState("");
  const [criteria4, setCriteria4] = useState("");
  const [c4marks, setC4Marks] = useState("");
  const [c4emarks, setC4EMarks] = useState("");
  const [criteria5, setCriteria5] = useState("");
  const [c5marks, setC5Marks] = useState("");
  const [c5emarks, setC5EMarks] = useState("");
  const [criteria6, setCriteria6] = useState("");
  const [c6marks, setC6Marks] = useState("");
  const [c6emarks, setC6EMarks] = useState("");
  const [criteria7, setCriteria7] = useState("");
  const [c7marks, setC7Marks] = useState("");
  const [c7emarks, setC7EMarks] = useState("");

  const handleSubmit = (event) => {
    const newEvaluation = {
      eemail: token.email,
      eid: token.iD,
      gid: gid,
      markingname: props.det.name,
      criteria1: props.det.criteria1,
      c1marks: props.det.c1marks,
      c1emarks: c1emarks,
      criteria2: props.det.criteria2,
      c2marks: props.det.c2marks,
      c2emarks: c2emarks,
      criteria3: props.det.criteria3,
      c3marks: props.det.c3marks,
      c3emarks: c3emarks,
      criteria4: props.det.criteria4,
      c4marks: props.det.c4marks,
      c4emarks: c4emarks,
      criteria5: props.det.criteria5,
      c5marks: props.det.c5marks,
      c5emarks: c5emarks,
      criteria6: props.det.criteria6,
      c6marks: props.det.c6marks,
      c6emarks: c6emarks,
      criteria7: props.det.criteria7,
      c7marks: props.det.c7marks,
      c7emarks: c7emarks,
    };
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      axios
        .post("http://localhost:5000/evaluation/evaluate", newEvaluation)
        .then(() =>
          swal("Success!", "Evaluation Saved Successfully!", "success")
        )
        .catch((err) => swal("Failed!", "Something Went Wrong!", "error"));
    }
    setValidated(true);
  };
  return (
    <div
      style={{
        backgroundColor: "rgba(0,0,0,0.6)",
        padding: "25px",
        borderRadius: "15px",
      }}
    >
      <Form {...props} noValidate validated={validated} onSubmit={handleSubmit}>
        <Row>
          <h6>General Infromations</h6>
          <Col xs={8}>
            <Form.Label>Evaluater's Email</Form.Label>
            <Form.Control
              value={token.email}
              onChange={(e) => setEEmail(e.target.value)}
              required
              disabled
            />
          </Col>
          <Col>
            <Form.Label>Evaluater ID</Form.Label>
            <Form.Control
              value={token.iD}
              onChange={(e) => setEID(e.target.value)}
              required
              disabled
            ></Form.Control>
          </Col>
        </Row>
        <Row style={{ marginTop: "5px" }}>
          <Col>
            <Form.Label>Group ID</Form.Label>
            <Form.Control
              placeholder="Group ID"
              value={gid}
              onChange={(e) => setGID(e.target.value)}
              required
            ></Form.Control>
          </Col>
          <Col xs={8}>
            <Form.Label>Marking Scheme Name</Form.Label>
            <Form.Control
              value={props.det.name}
              onChange={(e) => setMarkingName(e.target.value)}
              required
              disabled
            />
          </Col>
        </Row>
        <hr />
        <Row style={{ marginTop: "5px" }}>
          <h6>Evaluation</h6>
          <Col xs={6}>
            <Form.Label>Marking Criteria</Form.Label>
            <Form.Control
              placeholder="Criteria"
              value={props.det.criteria1}
              onChange={(e) => setCriteria1(e.target.value)}
              required
              disabled
            />
          </Col>
          <Col>
            <Form.Label>Total Mark</Form.Label>
            <Form.Control
              type="number"
              placeholder="Mark"
              value={props.det.c1marks}
              onChange={(e) => setC1Marks(e.target.value)}
              required
              disabled
            />
          </Col>
          <Col>
            <Form.Label>Earned Mark</Form.Label>
            <Form.Control
              type="number"
              placeholder="Mark"
              value={c1emarks}
              onChange={(e) => setC1EMarks(e.target.value)}
              required
            />
          </Col>
        </Row>
        <Row style={{ marginTop: "5px" }}>
          <Col xs={6}>
            <Form.Control
              placeholder="Criteria"
              value={props.det.criteria2}
              onChange={(e) => setCriteria2(e.target.value)}
              disabled
            />
          </Col>
          <Col>
            <Form.Control
              type="number"
              placeholder="Mark"
              value={props.det.c2marks}
              onChange={(e) => setC2Marks(e.target.value)}
              disabled
            />
          </Col>
          <Col>
            <Form.Control
              type="number"
              placeholder="Mark"
              value={c2emarks}
              onChange={(e) => setC2EMarks(e.target.value)}
            />
          </Col>
        </Row>
        <Row style={{ marginTop: "5px" }}>
          <Col xs={6}>
            <Form.Control
              placeholder="Criteria"
              value={props.det.criteria3}
              onChange={(e) => setCriteria3(e.target.value)}
              disabled
            />
          </Col>
          <Col>
            <Form.Control
              type="number"
              placeholder="Mark"
              value={props.det.c3marks}
              onChange={(e) => setC3Marks(e.target.value)}
              disabled
            />
          </Col>
          <Col>
            <Form.Control
              type="number"
              placeholder="Mark"
              value={c3emarks}
              onChange={(e) => setC3EMarks(e.target.value)}
            />
          </Col>
        </Row>
        <Row style={{ marginTop: "5px" }}>
          <Col xs={6}>
            <Form.Control
              placeholder="Criteria"
              value={props.det.criteria4}
              onChange={(e) => setCriteria4(e.target.value)}
              disabled
            />
          </Col>
          <Col>
            <Form.Control
              type="number"
              placeholder="Mark"
              value={props.det.c4marks}
              onChange={(e) => setC4Marks(e.target.value)}
              disabled
            />
          </Col>
          <Col>
            <Form.Control
              type="number"
              placeholder="Mark"
              value={c4emarks}
              onChange={(e) => setC4EMarks(e.target.value)}
            />
          </Col>
        </Row>
        <Row style={{ marginTop: "5px" }}>
          <Col xs={6}>
            <Form.Control
              placeholder="Criteria"
              value={props.det.criteria5}
              onChange={(e) => setCriteria5(e.target.value)}
              disabled
            />
          </Col>
          <Col>
            <Form.Control
              type="number"
              placeholder="Mark"
              value={props.det.c5marks}
              onChange={(e) => setC5Marks(e.target.value)}
              disabled
            />
          </Col>
          <Col>
            <Form.Control
              type="number"
              placeholder="Mark"
              value={c5emarks}
              onChange={(e) => setC5EMarks(e.target.value)}
            />
          </Col>
        </Row>
        <Row style={{ marginTop: "5px" }}>
          <Col xs={6}>
            <Form.Control
              placeholder="Criteria"
              value={props.det.criteria6}
              onChange={(e) => setCriteria6(e.target.value)}
              disabled
            />
          </Col>
          <Col>
            <Form.Control
              type="number"
              placeholder="Mark"
              value={props.det.c6marks}
              onChange={(e) => setC6Marks(e.target.value)}
              disabled
            />
          </Col>
          <Col>
            <Form.Control
              type="number"
              placeholder="Mark"
              value={c6emarks}
              onChange={(e) => setC6EMarks(e.target.value)}
            />
          </Col>
        </Row>
        <Row style={{ marginTop: "5px" }}>
          <Col xs={6}>
            <Form.Control
              placeholder="Criteria"
              value={props.det.criteria7}
              onChange={(e) => setCriteria7(e.target.value)}
              disabled
            />
          </Col>
          <Col>
            <Form.Control
              type="number"
              placeholder="Mark"
              value={props.det.c7marks}
              onChange={(e) => setC7Marks(e.target.value)}
              disabled
            />
          </Col>
          <Col>
            <Form.Control
              type="number"
              placeholder="Mark"
              value={c7emarks}
              onChange={(e) => setC7EMarks(e.target.value)}
            />
          </Col>
        </Row>
        <Button
          style={{ marginLeft: "490px", marginTop: "10px" }}
          variant="success"
          type="submit"
        >
          Save
        </Button>
      </Form>
    </div>
  );
};

export default EvaluationForm;
