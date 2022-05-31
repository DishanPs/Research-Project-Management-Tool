import React, { useEffect, useState } from "react";
import "./UploadStyle.css";
import axios from "axios";
import Templates from "./Templates";
import { Link } from "react-router-dom";
import "./UploadDoc";
import Table from "react-bootstrap/Table";
import StudentSideNavBar from "./StudentSideNavBar";
import Button from "react-bootstrap/Button";

const DownloadTemp = () => {
  const [temps, setTemps] = useState([]);

  useEffect(() => {
    const getAllUpDocs = () => {
      axios
        .get("http://localhost:5000/uploadDoc")
        .then((res) => {
          setTemps(res.data);
        })

        .catch((error) => {
          console.log(error);
        });
    };
    getAllUpDocs();
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url("https://wallpapercave.com/wp/wp2723929.jpg")`,
        backgroundSize: "cover",
        height: "120vh",
      }}
    >
      <StudentSideNavBar />
      <div
        style={{
          marginLeft: "200px",
        }}
      >
        <center>
          <h1>Templates</h1>
        </center>
        <hr />

        <Table striped bordered hover variant="dark" size="sm" className="cp3">
          <thead>
            <tr>
              <th style={{ fontWeight: "bold", fontSize: "24px" }}>
                Template Type
              </th>
              <th style={{ fontWeight: "bold", fontSize: "24px" }}>Download</th>
            </tr>
          </thead>

          {temps.map((temp) => (
            <tbody key={temp._id}>
              <tr>
                <td style={{ color: "white" }}>{temp.name}</td>
                <td>
                  <a href={temp.img}>
                    <Button
                      variant="outline-light"
                      style={{
                        width: "130px",
                        height: "35px",
                        fontWeight: "bold",
                      }}
                    >
                      Download
                    </Button>
                  </a>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>

        <br />
        <br />

        <br />
      </div>
    </div>
  );
};

export default DownloadTemp;
