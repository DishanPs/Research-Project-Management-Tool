import React, {useState} from 'react';
import axios from 'axios';
import FileInput from '../FileInput';
import styles from './styles.module.css'


const SongForm = () => {
    const [data, setData] = useState({
        name: "",
        artist: "",
        song: "",
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
            <h1 className={styles.heading}>Submission Form</h1>

            <input
              type="text"
              className={styles.input}
              placeholder="Song Name"
              name="name"
              onChange={handleChange}
              value={data.name}
            />
    
            <input
              type="text"
              className={styles.input}
              placeholder="Artist Name"
              name="artist"
              onChange={handleChange}
              value={data.artist}
            />

            <FileInput
              name="img"
              label="Choose image"
              handleInputState={handleInputState}
              type="image"
              value={data.img}
            />

            <FileInput
              name="song"
              label="Choose Song"
              handleInputState={handleInputState}
              type="audio"
              value={data.song}
            />
    
            <button type="submit" className={styles.submit_btn} onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      );
};

export default SongForm;