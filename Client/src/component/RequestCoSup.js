import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from "react";
import axios from 'axios'

import React from 'react'

const RequestCoSup = () => {
    const [validated, setvalidated] = useState(false);
    const [gid, setGroupId] = useState("");
    const [gname, setGroupName] = useState("");
    const [field, setResearchField] = useState("");
    const [cosupname, setCoSupName] = useState("");
    

    
    const checkSubmit = (event) => {
    
      const newCoSupRequest = {
          "groupID": gid,
          "groupName": gname,
          "field": field,
          "co_supervisorName" : cosupname,
          "status" : "Pending"
          
      }

      

      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      else {
          

          axios
              .post("http://localhost:5000/cosup/request", newCoSupRequest)
              .then(() => 
                alert("Success")
                
              )
              .catch((err) => alert(err));

          
          
      }
      setvalidated(true);
    };






  return (
    <div>

        <center><h2>Request a Co-Supervisor</h2></center>

        <div className='topicregform'>
        <Form noValidate validated={validated} onSubmit= {checkSubmit}>

            <Form.Group className="mb-3" controlId="gid">
                    <Form.Label>Group ID</Form.Label>
                    <Form.Control
                        placeholder="Group ID" 
                        value={gid}
                        onChange={(e) => setGroupId(e.target.value)}
                        required
                    />
            </Form.Group>

            <Form.Group className="mb-3" controlId="gname">
                    <Form.Label>Group Name</Form.Label>
                    <Form.Control
                        placeholder="Group Name" 
                        value={gname}
                        onChange={(e) => setGroupName(e.target.value)}
                        required
                    />
            </Form.Group>

            <Form.Group className="mb-3" controlId="supname">
                    <Form.Label>Co-Supervisor Name</Form.Label>
                    <Form.Control
                        placeholder="Co-Supervisor Name" 
                        value={supname}
                        onChange={(e) => setCoSupName(e.target.value)}
                        required
                    />
            </Form.Group>


            <Form.Group className="mb-3" controlId="topic">
                    <Form.Label>Research Field</Form.Label>
                    <Form.Control
                        placeholder="Research Field" 
                        value={field}
                        onChange={(e) => setResearchField(e.target.value)}
                        required
                    />
            </Form.Group>

            <Button variant="primary" type="submit">
            Submit
            </Button>
            

        </Form> 
        </div>
        <br />

    </div>
  )
}

export default RequestCoSup