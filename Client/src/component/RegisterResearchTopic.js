import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from "react";

const RegisterResearchTopic = () => {
    const [validated, setvalidated] = useState(false);
    const [gid, setGroupId] = useState("");
    const [gname, setGroupName] = useState("");
    const [topic, setResearchTopic] = useState("");

    
    const checkSubmit = (event) => {
    
      // const newCustomer = {
      //     "firstName": gid,
      //     "lastName": gname,
      //     "email": topic,
      //     
      // }

      

      // const form = event.currentTarget;
      // if (form.checkValidity() === false) {
      //   event.preventDefault();
      //   event.stopPropagation();
      // }
      // else {
      //     

      //     axios
      //         .post("http://localhost:5000/customer/register", newCustomer)
      //         .then((data) => console.log(data))
      //         .catch((err) => alert(err));

      //     axios
      //         .post("http://localhost:5000/login/add", newLogin)
      //         .then(() =>
      //             swal("Submitted!", "Successfully Registered", "success"))
      //         .catch((err) =>
      //     
      // }
      setvalidated(true);
    };



  return (
    <div style = {{
      backgroundImage: `url("https://foundation.caionline.org/wp-content/uploads/2017/06/research.jpg")`,
      height: "100vh",
      backgroundSize: "cover",}}
    >
      <center><h2>Register Research Topic</h2></center>

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

          <Form.Group className="mb-3" controlId="topic">
                    <Form.Label>Research Topic</Form.Label>
                    <Form.Control
                        placeholder="Research Topic" 
                        value={topic}
                        onChange={(e) => setResearchTopic(e.target.value)}
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

export default RegisterResearchTopic