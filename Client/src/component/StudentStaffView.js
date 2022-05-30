import React from "react";
import { Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import StudentSideNavBar from "./StudentSideNavBar";
import axios from "axios";
import { Link } from "react-router-dom";

const AdminStudentView = () => {
  const [AdminStudentViews, setAdminStudentView] = useState([]);

  useEffect(() => {
    const getAdminStudentViews = () => {
      axios
        .get("http://localhost:5000/staff")
        .then((res) => {
          setAdminStudentView(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          alert(err.msg);
        });
    };
    getAdminStudentViews();
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url("https://cdn.wallpapersafari.com/20/19/z4ugYj.jpg")`,
        height: "100vh",
        backgroundSize: "cover",
      }}
    >
      <StudentSideNavBar />
      <div className="stable">
        <center>
          <h1 style={{ color: "white" }}>Lecturers</h1>
        </center>

            <hr></hr>
            <center>
            <Link to="/requestsup"><Button   variant="primary">Request Supervisor</Button> </Link>
            <Link  to="/requestcosup"><Button   variant="primary">Request Co-supervisor</Button> </Link>
            </center>
            <hr></hr>

        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Email</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Contact No.</th>
              <th>Reserch Interest</th>
              <th>Faculty</th>
            </tr>
          </thead>
          {AdminStudentViews.map((AdminStudentView) => (
            <tbody key={AdminStudentView._id}>
              <tr>
                <td>{AdminStudentView.email}</td>
                <td>{AdminStudentView.firstName}</td>
                <td>{AdminStudentView.lastName}</td>
                <td>{AdminStudentView.contactNo}</td>
                <td>{AdminStudentView.researchInterest}</td>
                <td>{AdminStudentView.faculty}</td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    </div>
  );
};

export default AdminStudentView;
