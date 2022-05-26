import React from 'react'
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import AdminSideNavBar from './AdminSideNavBar';

const ResearchGroups = () => {
    const [groups, setGroup] = useState([]);

    useEffect(() => {
        const getGroups = () => {
          axios
            .get("http://localhost:5000/group")
            .then((res) => {
              setGroup(res.data);
            })
            .catch((err) => {
              alert(err.msg);
            });
        };
        getGroups();
      },[]);
    


  return (
    <div
      style={{
        backgroundImage: `url("https://wallpaperaccess.com/full/2053899.jpg")`,
        height: "100vh",
        backgroundSize: "cover",
      }}
    >
      <AdminSideNavBar />
      <div style={{ marginLeft: "200px", marginRight:"10px" }}>
        <center>
          <h3 style={{ color: "white" }}>Research Project Groups </h3>
        </center>
        <br />

        <div className="grouptable">
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Group ID</th>
                <th>Leader's ID</th>
                <th>Leader's Name</th>
                <th>Contact No.</th>
                <th>Email</th>
                <th>Member 2 ID</th>
                <th>Member 2 Name</th>
                <th>Member 3 ID</th>
                <th>Member 3 Name</th>
                <th>Member 4 ID</th>
                <th>Member 4 Name</th>
                <th>Group Name</th>
                <th>Assign Panel Members</th>
              </tr>
            </thead>
            {groups.map((group) => (
              <tbody key={group._id}>
                <tr>
                  <td>{group._id}</td>
                  <td>{group.leaderID}</td>
                  <td>{group.leaderName}</td>
                  <td>{group.contactNo}</td>
                  <td>{group.email}</td>
                  <td>{group.member2ID}</td>
                  <td>{group.member2Name}</td>
                  <td>{group.member3ID}</td>
                  <td>{group.member3Name}</td>
                  <td>{group.member4ID}</td>
                  <td>{group.member4Name}</td>
                  <td>{group.groupName}</td>
                  <td>
                    {" "}
                    <Button variant="primary">Assign</Button>
                  </td>
                </tr>
              </tbody>
            ))}
          </Table>
        </div>
      </div>
    </div>
  );
}

export default ResearchGroups