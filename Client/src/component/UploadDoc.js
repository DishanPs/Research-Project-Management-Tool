import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SongForm from './SongForm';
import Songs from './Songs';
import './UploadStyle.css';

const UploadDoc = () => {
  const [songs, setSongs] = useState([]); 

  useEffect(() => {
    const getAllUpDocs = () => {
      axios
      .get("http://localhost:5000/uploadDoc")
      .then((res) => {
        setSongs(res.data)
      })
        
      .catch((error) => {
        console.log(error)
      })
    };
    getAllUpDocs()
  }, [])

  return(
    <div>
      <SongForm/>

      {songs.map((song) => (
        <Songs song={song} key={song._id}/>
      ))}
      
    </div>
  );
  
}

export default UploadDoc
