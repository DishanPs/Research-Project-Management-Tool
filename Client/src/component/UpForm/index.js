import React, { useState } from "react";
import axios from "axios";
import FileInput from "../FileInput";
import styles from "./styles.module.css";
import swal from 'sweetalert';


const UpForm = () => {
  
  const [data, setData] = useState({
    name: "",
    img: "",
  });

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleInputState = (name, value) => {
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5000/uploadDoc";
      const { data: res } = await axios.post(url, data);
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
          className={styles.input}
          placeholder="Upload Type"
          name="name"
          onChange={handleChange}
          value={data.name}
        />

        <br />
        <br />

        {/* <input
              type="text"
              className={styles.input}
              placeholder="Artist Name"
              name="artist"
              onChange={handleChange}
              value={data.artist}
            /> */}

        <FileInput
          name="img"
          label="Choose from"
          handleInputState={handleInputState}
          type="image"
          value={data.img}
        />

        {/* <FileInput
              name="song"
              label="Choose Song"
              handleInputState={handleInputState}
              type="audio"
              value={data.song}
            /> */}

        <br />
        <br />
        <br />
        <button
          type="submit"
          className={styles.submit_btn}
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
    // </div>
  );
};

export default UpForm;
