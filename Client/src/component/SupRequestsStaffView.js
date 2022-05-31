import React from "react";
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Badge from "react-bootstrap/Badge";
import { useNavigate } from "react-router-dom";
import SupervisorSideNavBar from "./SupervisorSideNavBar";

const SupRequestsStaffView = () => {
  const [sups, setSupervisor] = useState([]);

  useEffect(() => {
    const getSupervisors = () => {
      axios
        .get("http://localhost:5000/sup")
        .then((res) => {
          setSupervisor(res.data);
        })
        .catch((err) => {
          alert(err.msg);
        });
    };
    getSupervisors();
  });

  const btnClick = (id, val) => {
    if (val == 1) {
      const updateStatus = {
        status: "Accepted",
      };

      axios
        .put(`http://localhost:5000/sup/update/${id}`, updateStatus)
        .then(() => navigate("/supstaff"))
        .catch((err) => alert(err));
    } else if (val == 2) {
      const updateStatus = {
        status: "Rejected",
      };

      axios
        .put(`http://localhost:5000/sup/update/${id}`, updateStatus)
        .then(() => navigate("/supstaff"))
        .catch((err) => alert(err));
    } else {
      const updateStatus = {
        status: "Pending",
      };

      axios
        .put(`http://localhost:5000/sup/update/${id}`, updateStatus)
        .then(() => navigate("/supstaff"))
        .catch((err) => alert(err));
    }
  };

  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundImage: `url("https://cdn.wallpapersafari.com/95/72/O1V2Mk.jpg")`,
        height: "100vh",
        backgroundSize: "cover",
      }}
    >
      <SupervisorSideNavBar />
      <div style={{ marginLeft: "200px" }}>
        <center>
          <h3 style={{ color: "white" }}>Supervisor Requests </h3>
        </center>
        <br />

        <div className="topictable">
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Group ID</th>
                <th>Group Name</th>
                <th>Field</th>
                <th>Supervisor Name</th>
                <th>Accept</th>
                <th>Reject</th>
                <th>Reset</th>
              </tr>
            </thead>
            {sups.map((sup) => (
              <tbody key={sup._id}>
                <tr>
                  <td>{sup.groupID}</td>
                  <td>{sup.groupName}</td>
                  <td>{sup.field}</td>
                  <td>
                    {sup.supervisorName} <Badge bg="warning">{sup.status}</Badge>{" "}
                  </td>
                  <td>
                    {" "}
                    <Button
                      variant="success"
                      onClick={() => {
                        btnClick(sup._id, 1);
                      }}
                    >
                      Accept
                    </Button>
                  </td>
                  <td>
                    {" "}
                    <Button
                      variant="danger"
                      onClick={() => {
                        btnClick(sup._id, 2);
                      }}
                    >
                      Reject
                    </Button>
                  </td>
                  <td>
                    {" "}
                    <Button
                      variant="primary"
                      onClick={() => {
                        btnClick(sup._id, 3);
                      }}
                    >
                      Reset
                    </Button>
                  </td>
                </tr>
              </tbody>
            ))}
          </Table>
        </div>
      </div>
    </div>
  );
};

export default SupRequestsStaffView;
