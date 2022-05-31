import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { Link, useParams } from "react-router-dom";
import "./UploadDoc";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import StudentSideNavBar from "./StudentSideNavBar";
import axios from "axios";
import { Button } from "react-bootstrap";

const SubDoc = () => {
  const [links, setLinks] = useState([]);
  const params = useParams();

  useEffect(() => {
    const getAllSubTypes = () => {
      axios
        .get(`http://localhost:5000/subtype/${params.id}`)
        .then((res) => {
          setLinks(res.data.data);
          console.log(params.id);
        })

        .catch((error) => {
          console.log(error);
        });
    };
    getAllSubTypes();
  }, []);

  const dateDifference = () => {
    const date1 = new Date();
    const date2 = new Date(links.Date);

    const timeDif = date2.getTime(links.Time) - date1.getTime();
    const dateDif = Math.ceil(timeDif / (3600 * 1000 * 24));

    return dateDif;
  };

  return (
    <div
      style={{
        backgroundImage: `url("https://img.wallpapersafari.com/desktop/1600/900/87/23/UZIQlg.jpg")`,
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <StudentSideNavBar />

      <div
        style={{
          marginLeft: "200px",
          marginTop: "0px",
          marginRight: "0px",
          height: "400px",
        }}
      >
        <center>
          <h1>{links.SubmissionType}</h1>
        </center>

        <div className="createsubform">
          <Form className="cp5">
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Submission status:</Form.Label>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>{links.Status}</Form.Label>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Due Date: </Form.Label>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>{links.Date}</Form.Label>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Dates Remaining: </Form.Label>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>
                    {dateDifference()}
                    {" days "}
                  </Form.Label>
                </Form.Group>
              </Col>
            </Row>{" "}
            <br />
            <br />
            <br />
            <Row>
              <Link to="/studentsub">
                <Button
                  type="submit"
                  style={{
                    backgroundColor: "green",
                    width: "150px",
                    height: "40px",
                    fontWeight: "bold",
                    marginLeft: "50%",
                  }}
                >
                  UPLOAD
                </Button>
              </Link>
            </Row>
          </Form>
        </div>
      </div>
      {/* ))} */}
    </div>
  );
};

export default SubDoc;
