import React, { useEffect, useState } from "react";
import "./UploadStyle.css";
import axios from "axios";
import Templates from "./Templates";
import { Link } from "react-router-dom";
import "./UploadDoc";
import Table from "react-bootstrap/Table";
import StudentSideNavBar from "./StudentSideNavBar";

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
    <div>
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

        {/* {temps.map((temp) => (<Templates temp={temp} key={temp._id}/>))} */}

        <Table striped bordered hover size="sm" className="cp3">
          <thead>
            <tr>
              <th>Template Type</th>
              <th>Download</th>
            </tr>
          </thead>

          {temps.map((temp) => (
            <tbody key={temp._id}>
              <tr>
                <td>{temp.name}</td>
                <td>
                  <button
                    style={{
                      backgroundColor: "#336699",
                      width: "130px",
                      height: "35px",
                      fontWeight: "bold",
                    }}
                  >
                    <a href={temp.img}>download</a>
                  </button>
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
