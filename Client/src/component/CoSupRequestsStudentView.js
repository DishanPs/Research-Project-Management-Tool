import React from 'react'
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table'
import axios from 'axios'
import Badge from 'react-bootstrap/Badge'
import StudentSideNavBar from './StudentSideNavBar';

const CoSupRequestsStudentView = () => {

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
    },);

  return (
    <>
      <StudentSideNavBar />
      <div style={{ marginLeft: "200px" }}>
        <center>
          <h3>Co-Supervisor Requests </h3>
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
                    <Badge bg="info">{cosup.status}</Badge>{" "}
                  </td>
                </tr>
              </tbody>
            ))}
          </Table>
        </div>
      </div>
    </>
  );
}

export default CoSupRequestsStudentView