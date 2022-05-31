import React, { useState } from "react";
import axios from "axios";
import FileInput from "../FileInput";
import swal from "sweetalert";
import styles from "./styles.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import StudentSideNavBar from "../StudentSideNavBar";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const StudentSub = () => {
  const navigate = useNavigate();

  const params = useParams();
  const [sdata, setSData] = useState({
    groupId: "",
    subType: "",
    file: "",
  });

  const [cdata, setCData] = useState({
    Status: "Attempted",
  });

  const handleTChange = ({ currentTarget: input }) => {
    setSData({ ...sdata, [input.name]: input.value });
  };

  const handleInputState = (name, value) => {
    setSData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5000/submission";
      const { data: res } = await axios.post(url, sdata);
      swal("Success!", "Uploaded Successfully!", "success"),
        navigate("/sublinks");
      console.log(res);
    } catch (error) {
      swal("Failed!", "Something Went Wrong!", "error");
      console.log(error);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url("https://wallpaperaccess.com/full/958467.jpg")`,
        backgroundSize: "cover",
        height: "120vh",
      }}
    >
      <StudentSideNavBar />
      <div className={styles.container}>
        <form className={styles.form}>
          <h1 className={styles.heading}>Upload Submission</h1>

          <br />
          <br />
          <br />
          <Form.Control
            type="text"
            value={sdata.groupId}
            placeholder="Group ID"
            name="groupId"
            onChange={handleTChange}
          />

          <br />

          <Form.Select
            type="text"
            placeholder="Submission Type"
            name="subType"
            onChange={handleTChange}
            value={sdata.subType}
          >
            <option value="" selected disabled hidden>
              Submission Type
            </option>
            <option>Topic Assessment form</option>
            <option>Proposal Document</option>
            <option>Presentation slides</option>
            <option>Final Thesis</option>
          </Form.Select>

          <br />
          <br />
          <FileInput
            name="file"
            label="Choose from"
            value={sdata.file}
            type="submission"
            handleInputState={handleInputState}
          />

          <br />
          <br />
          <Button variant="success" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default StudentSub;
