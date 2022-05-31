import React, { useEffect, useState } from "react";
import "./UploadStyle.css";
import axios from "axios";
import StudentSideNavBar from "./StudentSideNavBar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";

const SubLinks = () => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const getAllSubTypes = () => {
      axios
        .get("http://localhost:5000/subtype")
        .then((res) => {
          setLinks(res.data);
        })

        .catch((error) => {
          console.log(error);
        });
    };
    getAllSubTypes();
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url("https://media.istockphoto.com/photos/professional-project-manager-with-icons-about-planning-tasks-and-on-picture-id1299971955?b=1&k=20&m=1299971955&s=170667a&w=0&h=DuNMPzdSpSZuP8zXbPIQshoqkchlN53LPy_VhogBz4g=")`,
        backgroundSize: "cover",
        height: "110vh",
      }}
    >
      <StudentSideNavBar />
      <div
        style={{
          marginLeft: "200px",
        }}
      >
        
      <div className="cp7">
        <Form>

          <h3>Submission Links</h3><hr color="white"/><br/><br/>
            {links.map((link) => (
              <Link to={`/subtypes/${link._id}`}>
                <Button variant="link" key={link._id}>
                  {link.LinkName}
                </Button><br/>
              </Link>
            ))}
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SubLinks;
