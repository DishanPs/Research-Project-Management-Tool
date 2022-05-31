import React from "react";
import PanelSideNavBar from "./PanelSideNavBar";
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import axios from "axios";
import EvaluationForm from "./EvaluationForm";
import SubmitedPresentations from "./SubmitedPresentations";

const EvaluatePresentation = () => {
  const [presentationmarkings, SetPresentationMarkings] = useState([]);
  const [markingdetails, setMarkingDetails] = useState("");

  useEffect(() => {
    const getPresentationMarkings = () => {
      axios
        .get("http://localhost:5000/presentationmarking")
        .then((res) => {
          SetPresentationMarkings(res.data);
        })
        .catch((err) => {
          alert(err.msg);
        });
    };
    getPresentationMarkings();
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url("https://wallpaperaccess.com/full/2053899.jpg")`,
        height: "125vh",
        backgroundSize: "cover",
      }}
    >
      <PanelSideNavBar />
      <div
        style={{
          marginLeft: "210px",
          marginRight: "10px",
          marginTop: "10px",
        }}
      >
        <center>
          <h3 style={{ color: "white" }}>Evaluate Presentation </h3>
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
              {presentationmarkings.map((presentationmarking) => (
                <tbody key={presentationmarking._id}>
                  <tr>
                    <td>{presentationmarking.name}</td>
                    <td>{presentationmarking.totalmarks}</td>
                    <td>
                      <Button
                        variant="primary"
                        onClick={() => {
                          setMarkingDetails(presentationmarking);
                        }}
                      >
                        Select
                      </Button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </Table>
            <hr style={{ color: "white", height:"3px" }} />
            <div
              style={{
                width: "400px",
                marginLeft: "0px",
                marginRight: "20px",
                overflow: "auto",
                height: "300px",
              }}
            >
              <h5 style={{ color: "white" }}>Submited Presentations</h5>
              <SubmitedPresentations />
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

export default EvaluatePresentation;
