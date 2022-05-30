import React, {useEffect, useState} from "react";
import Form from "react-bootstrap/Form";
import { Link, useParams } from "react-router-dom";
import "./UploadDoc";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import StudentSideNavBar from "./StudentSideNavBar";
import axios from "axios";


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
    const dateDif = Math.ceil(timeDif/(3600*1000*24));

    return dateDif;
  };

  const timeDifference = () => {
    const date1 = new Date();
    const date2 = new Date(links.Date);

    const timeDif = date1.getTime();
    const dateDif = Math.floor(timeDif/(3600*1000*24));

    const time = timeDif - dateDif*3600*1000*24;

    console.log(timeDif)

    return time/(3600*1000);
  };

  return (
    <div>
      <StudentSideNavBar />
      {/* {details.map((detail) => ( */}
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
                    <Form.Label>Time Remaining: </Form.Label>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>{dateDifference()}{' days '}{timeDifference()}{' hours '}</Form.Label>
                  </Form.Group>
                </Col>
              </Row>{" "}
              <br />
              <br />
              <br />
              <Row>
                <Link to="/studentsub">
                  <button
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
                  </button>
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
