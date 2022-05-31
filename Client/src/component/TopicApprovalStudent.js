import React from "react";
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import Badge from "react-bootstrap/Badge";
import StudentSideNavBar from "./StudentSideNavBar";

const TopicApprovalStudent = () => {
  const [topics, setTopic] = useState([]);

  useEffect(() => {
    const getTopics = () => {
      axios
        .get("http://localhost:5000/topic")
        .then((res) => {
          setTopic(res.data);
        })
        .catch((err) => {
          alert(err.msg);
        });
    };
    getTopics();
  });

  return (
    <div
      style={{
        backgroundImage: `url("https://carleton.ca/healthsciences/wp-content/uploads/hs_banner1.jpg")`,
        height: "100vh",
        backgroundSize: "cover",
      }}
    >
      <StudentSideNavBar />
      <div style={{ marginLeft: "200px" }}>
        <center>
          <h3>Research Topics </h3>
        </center>
        <br />

        <div className="topictable">
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Group ID</th>
                <th>Group Name</th>
                <th>Supervisor Name</th>
                <th>Co-Supervisor Name</th>
                <th>Research Topic</th>
              </tr>
            </thead>
            {topics.map((topic) => (
              <tbody key={topic._id}>
                <tr>
                  <td>{topic.groupID}</td>
                  <td>{topic.groupName}</td>
                  <td>{topic.supervisorName}</td>
                  <td>{topic.cosupervisorName}</td>
                  <td>
                    {topic.topic} <Badge bg="warning">{topic.status}</Badge>{" "}
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

export default TopicApprovalStudent;
