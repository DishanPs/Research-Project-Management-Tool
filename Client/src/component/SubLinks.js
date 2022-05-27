import React, {useEffect, useState} from 'react'
import "./UploadStyle.css";
import axios from "axios";
import StudentSideNavBar from "./StudentSideNavBar";
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";


const SubLinks = () => {

    const [links, setLinks] = useState([]);

    useEffect(() => {
        const getAllSubTypes = () => {
            axios
                .get("http://localhost:5000/subtype")
                .then((res) => {
                    setLinks(res.data);
                })

                .catch((error) => {
                    console.log(error);
                });
        };
        getAllSubTypes();
    }, []);

  return (
    <div>
        <StudentSideNavBar />
      <div
        style={{
          marginLeft: "200px",
        }}
      >
          {links.map((link) => (
            <Link to={`/subtypes/${link._id}`}>  
              <Button variant="link" key={link._id}>{link.LinkName}</Button>
            </Link>
          ))}
      </div>
      
    </div>
  )
}

export default SubLinks
