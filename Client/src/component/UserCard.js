import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { ImLocation2, ImPhone } from "react-icons/im";
import { BsPersonSquare } from "react-icons/bs";
import { MdPermIdentity } from "react-icons/md";
import { MdArticle } from "react-icons/md";
import { MdHolidayVillage } from "react-icons/md";

const Profile = ({ profile }) => {
  const token = JSON.parse(sessionStorage.getItem("token"));
  const [profiledetails, setProfiledetails] = useState([]);

  useEffect(() => {
    if (token.type == "Student") {
      axios
        .get(`http://localhost:5000/student/students/${token.email}`)
        .then((res) => {
          console.log(res.data.data);
          setProfiledetails(res.data.data);
        })
        .catch((err) => {
          alert(err.msg);
        });
    } else if (token.type == "Admin") {
      axios
        .get(`http://localhost:5000/Admin/admins/${token.email}`)
        .then((res) => {
          console.log(res.data.data);
          setProfiledetails(res.data.data);
        })
        .catch((err) => {
          alert(err.msg);
        });
    } else {
      axios
        .get(`http://localhost:5000/staff/staffs/${token.email}`)
        .then((res) => {
          console.log(res.data.data);
          setProfiledetails(res.data.data);
        })
        .catch((err) => {
          alert(err.msg);
        });
    }
  }, []);

  return (
    <div>
      <div>
        <Card style={{ width: "22rem" }}>
          <Card.Body>
            <Card.Title>
              {profiledetails.firstName} {profiledetails.lastName}
            </Card.Title>
          </Card.Body>
        </Card>
        <br />
        <Card>
          <Card.Body>
            <MdPermIdentity /> {profiledetails.ID}
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <FaEnvelope /> {profiledetails.email}
          </Card.Body>
        </Card>
        {token.type == "Admin" ? (
          ""
        ) : (
          <Card>
            <Card.Body>
              <MdHolidayVillage /> {profiledetails.faculty}
            </Card.Body>
          </Card>
        )}
        {token.type == "Staff" ? (
          <Card>
            <Card.Body>
              <MdArticle /> {profiledetails.researchInterest}
            </Card.Body>
          </Card>
        ) : (
          ""
        )}
        <Card>
          <Card.Body>
            <BsPersonSquare /> {profiledetails.NIC}
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <ImPhone /> {profiledetails.contactNo}
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
