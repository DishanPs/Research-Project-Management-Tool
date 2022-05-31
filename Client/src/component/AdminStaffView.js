import React from "react";
import { Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import AdminSideNavBar from "./AdminSideNavBar";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import { useState, useEffect } from "react";
import ModleStaffDelete from "./AdminModalDelStaffs";
import ModalnewStaff from "./AdminModalUpdStaff";
import axios from "axios";

const AdminStaffView = () => {
  const [modalStfUpdate, setmodalStfUpdate] = React.useState(false);
  const [updateAdminStaffView, setupdateAdminStaffView] = useState(false);
  const [modaldeleteStaff, setModaldeleteStaff] = useState(false);
  const [deleteAdminStaffView, setdeleteAdminStaffView] = useState(false);

  const [AdminStaffViews, setAdminStaffView] = useState([]);

  useEffect(() => {
    const getAdminStaffViews = () => {
      axios
        .get("http://localhost:5000/staff")
        .then((res) => {
          setAdminStaffView(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          alert(err.msg);
        });
    };
    getAdminStaffViews();
  });

  return (
    <div
      style={{
        backgroundImage: `url("https://media.istockphoto.com/photos/stack-of-books-spotlighted-on-black-background-picture-id1201156572?k=20&m=1201156572&s=612x612&w=0&h=5yaDW9RS7ARU1qUAjMgDtFm-XilCX0KDhXd7avI9HF8=")`,
        height: "100vh",
        backgroundSize: "cover",
      }}
    >
      <AdminSideNavBar />
      <div className="stable">
        <br></br>
        <center>
          <h1 style={{ color: "white" }}>Staff</h1>
        </center>
        <hr></hr>

        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Staff ID</th>
              <th>Email</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Contact No.</th>
              <th>NIC</th>
              <th>Reserch Interest</th>
              <th>Faculty</th>
              <th>User Type</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          {AdminStaffViews.map((AdminStaffView) => (
            <tbody key={AdminStaffView._id}>
              <tr>
                <td>{AdminStaffView.ID}</td>
                <td>{AdminStaffView.email}</td>
                <td>{AdminStaffView.firstName}</td>
                <td>{AdminStaffView.lastName}</td>
                <td>{AdminStaffView.contactNo}</td>
                <td>{AdminStaffView.NIC}</td>
                <td>{AdminStaffView.researchInterest}</td>
                <td>{AdminStaffView.faculty}</td>
                <td>{AdminStaffView.type}</td>

                <td>
                  <div>
                    &nbsp;&nbsp;&nbsp;
                    <span>
                      <FaPencilAlt
                        onClick={() => {
                          setmodalStfUpdate(true);
                          setupdateAdminStaffView(AdminStaffView);
                        }}
                        style={{ cursor: "pointer", color: "blue" }}
                        title="Update the staff member details"
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
                          setModaldeleteStaff(true);
                          setdeleteAdminStaffView(AdminStaffView);
                        }}
                        style={{ cursor: "pointer", color: "red" }}
                        title="Delete the staff member"
                      />
                    </span>
                  </div>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>

        <ModalnewStaff
          show={modalStfUpdate}
          onHide={() => setmodalStfUpdate(false)}
          profile={updateAdminStaffView}
        />

        <ModleStaffDelete
          show={modaldeleteStaff}
          onHide={() => setModaldeleteStaff(false)}
          deleteAdminStaffView={deleteAdminStaffView}
        />
      </div>
    </div>
  );
};

export default AdminStaffView;
