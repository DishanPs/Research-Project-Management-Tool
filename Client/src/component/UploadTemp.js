import React from "react";
import Form from "react-bootstrap/Form";
import "./UploadStyle.css";
import { Link } from "react-router-dom";
import "./UploadDoc";
import AdminSideNavBar from "./AdminSideNavBar";

const UploadTemp = () => {
  return (
    <div
      style={{
        backgroundImage: `url("https://i.pinimg.com/originals/58/54/23/58542340effa27e4941369bd76c70e15.jpg")`,
        backgroundSize: "cover",
        height: "110vh",
      }}
    >
      <AdminSideNavBar />
      <div
        style={{
          marginLeft: "200px",
        }}
      >
        <center>
          <h1>Templates</h1>
        </center>
        <hr />
        <div
          style={{
            marginLeft: "80px",
          }}
        >
          <u>
            <h3>Proposal Document</h3>
          </u>
          <br />
          <Link to="/uploaddoc">
            <button
              type="submit"
              style={{
                backgroundColor: "#336699",
                width: "150px",
                height: "40px",
                fontWeight: "bold",
              }}
            >
              UPLOAD
            </button>
          </Link>
          <br />
          <br />

          <u>
            <h3>Topic Assessment Form</h3>
          </u>
          <br />
          <Link to="/uploaddoc">
            <button
              type="submit"
              style={{
                backgroundColor: "#336699",
                width: "150px",
                height: "40px",
                fontWeight: "bold",
              }}
            >
              UPLOAD
            </button>
          </Link>
          <br />
          <br />

          <u>
            <h3>Presentation Slides</h3>
          </u>
          <br />
          <Link to="/uploaddoc">
            <button
              type="submit"
              style={{
                backgroundColor: "#336699",
                width: "150px",
                height: "40px",
                fontWeight: "bold",
              }}
            >
              UPLOAD
            </button>
          </Link>
          <br />
          <br />

          <u>
            <h3>Final Thesis</h3>
          </u>
          <br />
          <Link to="/uploaddoc">
            <button
              type="submit"
              style={{
                backgroundColor: "#336699",
                width: "150px",
                height: "40px",
                fontWeight: "bold",
              }}
            >
              UPLOAD
            </button>
          </Link>
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default UploadTemp;
