import React, { useState } from "react";
import axios from "axios";
import FileInput from "../FileInput";
import swal from 'sweetalert';
import styles from "./styles.module.css";
import TextField from '@material-ui/core/TextField';


const StudentSub = () => {

  const [sdata, setSData] = useState({
    groupId: '',
    subType: '',
    file: '',
  });

  const handleTChange = ({currentTarget: input}) => {
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
        <h1 className={styles.heading}>Upload Submission</h1>

        <input
          type="text"
          value={sdata.groupId}
          placeholder="Submission Title"
          name="groupId"
          onChange={handleTChange}
        />

        <br/>

        <input
              type="text"
              placeholder="Submission Type"
              name="subType"
              onChange={handleTChange}
              value={sdata.subType}
            />

        <FileInput
          name="file"
          label="Choose from"
          value={sdata.file}
          type="submission"
          handleInputState={handleInputState}
          
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
