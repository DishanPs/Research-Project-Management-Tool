import React from "react";
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import Badge from "react-bootstrap/Badge";
import StudentSideNavBar from "./StudentSideNavBar";

const SupRequestsStudentView = () => {
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

  return (
    <div
      style={{
        backgroundImage: `url("https://cdn.wallpapersafari.com/50/35/iZb0jc.jpg")`,
        height: "100vh",
        backgroundSize: "cover",
      }}
    >
      <StudentSideNavBar />
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
                </tr>
              </tbody>
            ))}
          </Table>
        </div>
      </div>
    </div>
  );
};

export default SupRequestsStudentView;
