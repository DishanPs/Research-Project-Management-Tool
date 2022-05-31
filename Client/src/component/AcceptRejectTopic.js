import React from "react";
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Badge from "react-bootstrap/Badge";
import { useNavigate } from "react-router-dom";
import PanelSideNavBar from "./PanelSideNavBar";
import SubmitedTopics from "./SubmitedTopics";

const AcceptRejectTopic = () => {
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

  const btnClick = (id, val) => {
    if (val == 1) {
      const updateStatus = {
        status: "Accepted",
      };

      axios
        .put(`http://localhost:5000/topic/update/${id}`, updateStatus)
        .then(() => navigate("/viewtopics"))
        .catch((err) => alert(err));
    } else if (val == 2) {
      const updateStatus = {
        status: "Rejected",
      };

      axios
        .put(`http://localhost:5000/topic/update/${id}`, updateStatus)
        .then(() => navigate("/viewtopics"))
        .catch((err) => alert(err));
    } else {
      const updateStatus = {
        status: "Pending",
      };

      axios
        .put(`http://localhost:5000/topic/update/${id}`, updateStatus)
        .then(() => navigate("/viewtopics"))
        .catch((err) => alert(err));
    }
  };

  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundImage: `url("https://carleton.ca/healthsciences/wp-content/uploads/hs_banner1.jpg")`,
        height: "100vh",
        backgroundSize: "cover",
      }}
    >
      <PanelSideNavBar />
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
                <th>Accept</th>
                <th>Reject</th>
                <th>Reset</th>
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
                  <td>
                    {" "}
                    <Button
                      variant="success"
                      onClick={() => {
                        btnClick(topic._id, 1);
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
                        btnClick(topic._id, 2);
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
                        btnClick(topic._id, 3);
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

        <hr style = {{color : "black", height: "3px"}} />
          <div className="doctable"> 
            <h4> Submitted Topic Details Documents</h4>
            <br />
            <SubmitedTopics />
          </div> 
      </div>
    </div>
  );
};

export default AcceptRejectTopic;
