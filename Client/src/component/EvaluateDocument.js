import React from "react";
import SupervisorSideNavBar from "./SupervisorSideNavBar";
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import axios from "axios";
import EvaluationForm from "./EvaluationForm";
import SubmitedDocuments from "./SubmitedDocuments";

const EvaluateDocument = () => {
  const [documentmarkings, SetDocumentMarkings] = useState([]);
  const [markingdetails, setMarkingDetails] = useState("");

  useEffect(() => {
    const getDocumentMarkings = () => {
      axios
        .get("http://localhost:5000/documentmarking")
        .then((res) => {
          SetDocumentMarkings(res.data);
        })
        .catch((err) => {
          alert(err.msg);
        });
    };
    getDocumentMarkings();
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url("https://wallpaperaccess.com/full/2053899.jpg")`,
        height: "125vh",
        backgroundSize: "cover",
      }}
    >
      <SupervisorSideNavBar />
      <div
        style={{
          marginLeft: "210px",
          marginRight: "10px",
          marginTop: "10px",
        }}
      >
        <center>
          <h3 style={{ color: "white" }}>Evaluate Document </h3>
          <hr style={{ color: "white" }} />
        </center>
        <h5 style={{ marginLeft: "30px", color: "white" }}>
          Select Marking Scheme to Evaluate{" "}
        </h5>
        <div style={{ display: "flex" }}>
          <div
            style={{
              width: "500px",
              marginLeft: "20px",
              marginRight: "20px",
            }}
          >
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Marking Scheme Name</th>
                  <th>Total Marks</th>
                  <th>Select to Evaluate</th>
                </tr>
              </thead>
              {documentmarkings.map((documentmarking) => (
                <tbody key={documentmarking._id}>
                  <tr>
                    <td>{documentmarking.name}</td>
                    <td>{documentmarking.totalmarks}</td>
                    <td>
                      <Button
                        variant="primary"
                        onClick={() => {
                          setMarkingDetails(documentmarking);
                        }}
                      >
                        Select
                      </Button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </Table>
            <hr style={{ color: "white" }} />
            <div
              style={{
                width: "400px",
                marginLeft: "0px",
                marginRight: "20px",
                overflow: "auto",
                height: "300px",
              }}
            >
              <h5 style={{ color: "white" }}>Submited Documents</h5>
              <SubmitedDocuments />
            </div>
          </div>
          <div style={{ color: "white" }}>
            <hr style={{ width: "3px", height: "90vh" }} />
          </div>
          <div
            style={{
              color: "white",
              width: "600px",
              marginLeft: "60px",
              marginRight: "20px",
            }}
          >
            <EvaluationForm det={markingdetails} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EvaluateDocument;
