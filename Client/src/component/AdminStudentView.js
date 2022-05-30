import React from "react";
import { Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import { FaPencilAlt, FaTrash } from "react-icons/fa";
import { useState, useEffect } from "react";
import ModleStudentDelete from "./AdminModalDelStudents";
import AdminSideNavBar from "./AdminSideNavBar";
import ModalnewStudent from "./AdminModalUpdStudent";
import axios from "axios";

const AdminStudentView = () => {
  const [modalStuUpdate, setmodalStuUpdate] = React.useState(false);
  const [updateAdminStudentView, setupdateAdminStudentView] = useState(false);
  const [modaldeleteStudent, setModaldeleteStudent] = useState(false);
  const [deleteAdminStudentView, setdeleteAdminStudentView] = useState(false);

  const [AdminStudentViews, setAdminStudentView] = useState([]);

  useEffect(() => {
    const getAdminStudentViews = () => {
      axios
        .get("http://localhost:5000/student")
        .then((res) => {
          setAdminStudentView(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          alert(err.msg);
        });
    };
    getAdminStudentViews();
  });

  return (
    <div
      style={{
        backgroundImage: `url("https://img.wallpapersafari.com/desktop/1024/576/90/30/9oCdMj.jpg")`,
        height: "100vh",
        backgroundSize: "cover",
      }}
    >
      <AdminSideNavBar />
      <div className="stable">
        <br></br>
        <center>
          <h1 style={{ color: "white" }}>Students</h1>
        </center>
        <hr></hr>

        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Student ID</th>
              <th>Email</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Contact No.</th>
              <th>NIC</th>
              <th>Faculty</th>
              <th>User Type</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          {AdminStudentViews.map((AdminStudentView) => (
            <tbody key={AdminStudentView._id}>
              <tr>
                <td>{AdminStudentView.ID}</td>
                <td>{AdminStudentView.email}</td>
                <td>{AdminStudentView.firstName}</td>
                <td>{AdminStudentView.lastName}</td>
                <td>{AdminStudentView.contactNo}</td>
                <td>{AdminStudentView.NIC}</td>
                <td>{AdminStudentView.faculty}</td>
                <td>{AdminStudentView.type}</td>

                <td>
                  <div>
                    &nbsp;&nbsp;&nbsp;
                    <span>
                      <FaPencilAlt
                        onClick={() => {
                          setmodalStuUpdate(true);
                          setupdateAdminStudentView(AdminStudentView);
                        }}
                        style={{ cursor: "pointer", color: "blue" }}
                        title="Update the student details"
                      />
                    </span>
                  </div>
                </td>

                <td>
                  <div>
                    &nbsp;&nbsp;&nbsp;
                    <span>
                      <FaTrash
                        onClick={() => {
                          setModaldeleteStudent(true);
                          setdeleteAdminStudentView(AdminStudentView);
                        }}
                        style={{ cursor: "pointer", color: "red" }}
                        title="Delete the student"
                      />
                    </span>
                  </div>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>

        <ModalnewStudent
          show={modalStuUpdate}
          onHide={() => setmodalStuUpdate(false)}
          profile={updateAdminStudentView}
        />

        <ModleStudentDelete
          show={modaldeleteStudent}
          onHide={() => setModaldeleteStudent(false)}
          deleteAdminStudentView={deleteAdminStudentView}
        />
      </div>
    </div>
  );
};

export default AdminStudentView;
