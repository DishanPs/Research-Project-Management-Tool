import React from "react";
import Form from "react-bootstrap/Form";
import "./UploadStyle.css";
import { Link } from "react-router-dom";
import "./UploadDoc";

const UploadTemp = () => {
  return (
    <div className="cp2">
      <center>
        <h1>Templates</h1>
      </center>
      <hr />

      <u>
        <h3>Proposal Document</h3>
      </u>
      <br />
      <Link to="/uploaddoc">
        <button
          type="submit"
          style={{
            backgroundColor: "green",
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
            backgroundColor: "green",
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
            backgroundColor: "green",
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
            backgroundColor: "green",
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
  );
};

export default UploadTemp;
