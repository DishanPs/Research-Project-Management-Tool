import React, { useState } from "react";
import axios from "axios";
import FileInput from "../FileInput";
import swal from 'sweetalert';
import styles from "./styles.module.css";


const StudentSub = () => {

  const [sdata, setSData] = useState({
    groupId,
    subType,
    file,
  });

  const handleTChange = ({ currentTarget: inp }) => {
    setSData({ ...sdata, [inp.name]: inp.value });
  };

  const handleInputState = (name, value) => {
    setSData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5000/submission";
      const { data: res } = await axios.post(url, sdata);
      swal("Success!", "uploaded Successfully!", "success"),
      console.log(res);
    } catch (error) {
      swal("Failed!", "Something Went Wrong!", "error");
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      {/* <div style={{backgroundImage: `url("https://wallpaperaccess.com/full/958467.jpg")`, backgroundSize: "cover"}}> */}

      <form className={styles.form}>
        <h1 className={styles.heading}>Upload Template</h1>

        <input
          type="text"
          value={sdata.groupId}
          placeholder="Submission Title"
          name="id"
          onChange={handleTChange}
        />

        <br/>

        <input
              type="text"
              placeholder="Submission Type"
              name="type"
              onChange={handleTChange}
              value={sdata.subType}
            />

        <FileInput
          name="img"
          label="Choose from"
          handleInputState={handleInputState}
          type="submission"
          value={sdata.file}
        />

        <button
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default StudentSub;
