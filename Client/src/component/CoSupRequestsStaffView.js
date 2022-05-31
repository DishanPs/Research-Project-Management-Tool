import React from "react";
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Badge from "react-bootstrap/Badge";
import { useNavigate } from "react-router-dom";
import SupervisorSideNavBar from "./SupervisorSideNavBar";

const CoSupRequestsStaffView = () => {
  const [cosups, setCoSupervisor] = useState([]);

  useEffect(() => {
    const getCoSupervisors = () => {
      axios
        .get("http://localhost:5000/cosup")
        .then((res) => {
          setCoSupervisor(res.data);
        })
        .catch((err) => {
          alert(err.msg);
        });
    };
    getCoSupervisors();
  });

  const btnClick = (id, val) => {
    if (val == 1) {
      const updateStatus = {
        status: "Accepted",
      };

      axios
        .put(`http://localhost:5000/cosup/update/${id}`, updateStatus)
        .then(() => navigate("/cosupstaff"))
        .catch((err) => alert(err));
    } else if (val == 2) {
      const updateStatus = {
        status: "Rejected",
      };

      axios
        .put(`http://localhost:5000/cosup/update/${id}`, updateStatus)
        .then(() => navigate("/cosupstaff"))
        .catch((err) => alert(err));
    } else {
      const updateStatus = {
        status: "Pending",
      };

      axios
        .put(`http://localhost:5000/cosup/update/${id}`, updateStatus)
        .then(() => navigate("/cosupstaff"))
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
          <h3 style={{ color: "white" }}>Co-Supervisor Requests </h3>
        </center>
        <br />

        <div className="topictable">
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Group ID</th>
                <th>Group Name</th>
                <th>Field</th>
                <th>Co-Supervisor Name</th>
                <th>Accept</th>
                <th>Reject</th>
                <th>Reset</th>
              </tr>
            </thead>
            {cosups.map((cosup) => (
              <tbody key={cosup._id}>
                <tr>
                  <td>{cosup.groupID}</td>
                  <td>{cosup.groupName}</td>
                  <td>{cosup.field}</td>
                  <td>
                    {cosup.co_supervisorName}{" "}
                    <Badge bg="warning">{cosup.status}</Badge>{" "}
                  </td>
                  <td>
                    {" "}
                    <Button
                      variant="success"
                      onClick={() => {
                        btnClick(cosup._id, 1);
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
                        btnClick(cosup._id, 2);
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
                        btnClick(cosup._id, 3);
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

export default CoSupRequestsStaffView;
