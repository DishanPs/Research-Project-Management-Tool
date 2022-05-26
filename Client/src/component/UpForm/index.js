import React, {useState} from 'react';
import axios from 'axios';
import FileInput from '../FileInput';
import styles from './styles.module.css'


const UpForm = () => {
    const [data, setData] = useState({
        name: "",
        img: ""
      });
    
      const handleChange = ({currentTarget: input}) => {
        setData({...data, [input.name]: input.value });
      };
    
      const handleInputState = (name, value) => {
        setData((prev) => ({...prev, [name]: value}));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try{
          const url = "http://localhost:5000/uploadDoc";
          const {data: res} = await axios.post(url, data)
          alert("Successfully added");
          console.log(res)
        }catch (error){
          console.log(error)
        }
      }
    
      return (
        <div className={styles.container}>
          {/* <center>
            <h1>File Submission</h1>
          </center> */}
    
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
    
            <button type="submit" className={styles.submit_btn} onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      );
};

export default UpForm;