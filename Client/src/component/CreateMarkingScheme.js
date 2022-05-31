import React from "react";
import AdminSideNavBar from "./AdminSideNavBar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Row, Col } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const CreateMarkingScheme = () => {
  const [validated, setValidated] = useState(false);
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [totalmarks, setTotalMarks] = useState("");
  const [criteria1, setCriteria1] = useState("");
  const [c1marks, setC1Marks] = useState("");
  const [criteria2, setCriteria2] = useState("");
  const [c2marks, setC2Marks] = useState("");
  const [criteria3, setCriteria3] = useState("");
  const [c3marks, setC3Marks] = useState("");
  const [criteria4, setCriteria4] = useState("");
  const [c4marks, setC4Marks] = useState("");
  const [criteria5, setCriteria5] = useState("");
  const [c5marks, setC5Marks] = useState("");
  const [criteria6, setCriteria6] = useState("");
  const [c6marks, setC6Marks] = useState("");
  const [criteria7, setCriteria7] = useState("");
  const [c7marks, setC7Marks] = useState("");

  const handleSubmit = (event) => {
    const newMarkingScheme = {
      name: name,
      totalmarks: totalmarks,
      criteria1: criteria1,
      c1marks: c1marks,
      criteria2: criteria2,
      c2marks: c2marks,
      criteria3: criteria3,
      c3marks: c3marks,
      criteria4: criteria4,
      c4marks: c4marks,
      criteria5: criteria5,
      c5marks: c5marks,
      criteria6: criteria6,
      c6marks: c6marks,
      criteria7: criteria7,
      c7marks: c7marks,
    };

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      if (type === "Document Evaluation") {
        axios
          .post(
            "http://localhost:5000/documentmarking/create",
            newMarkingScheme
          )
          .then(
            () =>
              swal("Success!", "Marking Scheme Saved Successfully!", "success"),
            navigate("/createmarking")
          )
          .catch((err) => swal("Failed!", "Something Went Wrong!", "error"));
      } else {
        axios
          .post(
            "http://localhost:5000/presentationmarking/create",
            newMarkingScheme
          )
          .then(
            () =>
              swal("Success!", "Marking Scheme Saved Successfully!", "success"),
            navigate("/createmarking")
          )
          .catch((err) => swal("Failed!", "Something Went Wrong!", "error"));
      }
    }
    setValidated(true);
  };

  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundImage: `url("https://wallpaperaccess.com/full/2053899.jpg")`,
        height: "110vh",
        backgroundSize: "cover",
      }}
    >
      <AdminSideNavBar />
      <div
        style={{ marginLeft: "210px", marginRight: "10px", marginTop: "0px" }}
      >
        <div
          style={{
            width: "550px",
            height: "auto",
            marginTop: "20px",
            marginLeft: "365px",
            marginRight: "365px",
            backgroundColor: "whitesmoke",
            padding: "15px",
            borderRadius:"10px"
          }}
        >
          <center>
            <h4 style={{ color: "black" }}>Create Marking Schemes</h4>
          </center>
          <hr />
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row>
              <h6>General Infromations</h6>
              <Col>
                <Form.Select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  required
                >
                  <option value="" disabled hidden>
                    Evaluation Type
                  </option>
                  <option>Document Evaluation</option>
                  <option>Presentation Evaluation</option>
                </Form.Select>
              </Col>
            </Row>
            <Row style={{ marginTop: "5px" }}>
              <Col xs={8}>
                <Form.Select
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                >
                  <option value="" disabled hidden>
                    Document / Presentation Name
                  </option>
                  <option>Topic Assessment Form</option>
                  <option>Proposal Document</option>
                  <option>Final Thesis</option>
                  <option>Final Presentation</option>
                </Form.Select>
              </Col>
              <Col>
                <Form.Control
                  type="number"
                  placeholder="Total Marks"
                  value={totalmarks}
                  onChange={(e) => setTotalMarks(e.target.value)}
                  required
                />
              </Col>
            </Row>
            <Row style={{ marginTop: "5px" }}>
              <h6>Marking Criterias</h6>
              <p>At least one marking criteria is required</p>
              <Col xs={9}>
                <Form.Control
                  placeholder="Criteria"
                  value={criteria1}
                  onChange={(e) => setCriteria1(e.target.value)}
                  required
                />
              </Col>
              <Col>
                <Form.Control
                  type="number"
                  placeholder="Mark"
                  value={c1marks}
                  onChange={(e) => setC1Marks(e.target.value)}
                  required
                />
              </Col>
            </Row>
            <Row style={{ marginTop: "5px" }}>
              <Col xs={9}>
                <Form.Control
                  placeholder="Criteria"
                  value={criteria2}
                  onChange={(e) => setCriteria2(e.target.value)}
                />
              </Col>
              <Col>
                <Form.Control
                  type="number"
                  placeholder="Mark"
                  value={c2marks}
                  onChange={(e) => setC2Marks(e.target.value)}
                />
              </Col>
            </Row>
            <Row style={{ marginTop: "5px" }}>
              <Col xs={9}>
                <Form.Control
                  placeholder="Criteria"
                  value={criteria3}
                  onChange={(e) => setCriteria3(e.target.value)}
                />
              </Col>
              <Col>
                <Form.Control
                  type="number"
                  placeholder="Mark"
                  value={c3marks}
                  onChange={(e) => setC3Marks(e.target.value)}
                />
              </Col>
            </Row>
            <Row style={{ marginTop: "5px" }}>
              <Col xs={9}>
                <Form.Control
                  placeholder="Criteria"
                  value={criteria4}
                  onChange={(e) => setCriteria4(e.target.value)}
                />
              </Col>
              <Col>
                <Form.Control
                  type="number"
                  placeholder="Mark"
                  value={c4marks}
                  onChange={(e) => setC4Marks(e.target.value)}
                />
              </Col>
            </Row>
            <Row style={{ marginTop: "5px" }}>
              <Col xs={9}>
                <Form.Control
                  placeholder="Criteria"
                  value={criteria5}
                  onChange={(e) => setCriteria5(e.target.value)}
                />
              </Col>
              <Col>
                <Form.Control
                  type="number"
                  placeholder="Mark"
                  value={c5marks}
                  onChange={(e) => setC5Marks(e.target.value)}
                />
              </Col>
            </Row>
            <Row style={{ marginTop: "5px" }}>
              <Col xs={9}>
                <Form.Control
                  placeholder="Criteria"
                  value={criteria6}
                  onChange={(e) => setCriteria6(e.target.value)}
                />
              </Col>
              <Col>
                <Form.Control
                  type="number"
                  placeholder="Mark"
                  value={c6marks}
                  onChange={(e) => setC6Marks(e.target.value)}
                />
              </Col>
            </Row>
            <Row style={{ marginTop: "5px" }}>
              <Col xs={9}>
                <Form.Control
                  placeholder="Criteria"
                  value={criteria7}
                  onChange={(e) => setCriteria7(e.target.value)}
                />
              </Col>
              <Col>
                <Form.Control
                  type="number"
                  placeholder="Mark"
                  value={c7marks}
                  onChange={(e) => setC7Marks(e.target.value)}
                />
              </Col>
            </Row>
            <Button
              style={{ marginLeft: "450px", marginTop: "10px" }}
              variant="success"
              type="submit"
            >
              Save
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CreateMarkingScheme;
