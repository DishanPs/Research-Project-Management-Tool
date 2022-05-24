import React from 'react'
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import Badge from 'react-bootstrap/Badge'

const AcceptRejectTopic = () => {
    const [topics, setTopic] = useState([]);
    const [value,setValue] = useState("");
    const [response,setResponse] = useState("");

   
    useEffect(() => {
        const getTopics = () => {
          axios
            .get("http://localhost:5000/topic")
            .then((res) => {
              setTopic(res.data);
            })
            .catch((err) => {
              alert(err.msg);
            });
        };
        getTopics();
      },[]);


    // const acceptClick = (val) => {
    //     val = val;
    //     //const [value,setValue] = useState("");
    //     console.log(val);
    // }





  return (
    <div style = {{
        backgroundImage: `url("https://carleton.ca/healthsciences/wp-content/uploads/hs_banner1.jpg")`,
        height: "100vh",
        backgroundSize: "cover",}}
    >

        <center>
            <h3>Research Topics </h3>
        </center>
        <br />

        <div className='topictable'>
            
            <Table striped bordered hover variant='dark'>
                <thead>
                <tr>
                    <th>Group ID</th>
                    <th>Group Name</th>
                    <th>Research Topic</th>
                    <th>Accept</th>
                    <th>Reject</th>
                   
                </tr>
                </thead>
                {topics.map((topic) => (
                <tbody key={topic._id}>
                    <tr>
                    <td>{topic.groupID}</td>
                    <td>{topic.groupName}</td>
                    <td>{topic.topic}  <Badge bg="info">{value == 1 ? "Accepted" : value == 2 ? "Rejected" : "Pending"}</Badge> </td>
                    <td> <Button variant='success' onClick ={() => {setValue(1); setResponse(topic)}}>Accept</Button></td>
                    <td> <Button variant='danger' onClick={() => {setValue(2); setResponse(topic)}}>Reject</Button></td>
                    
                    </tr>
                </tbody>
                ))}
             </Table>

        </div>
    </div>
  )
}

export default AcceptRejectTopic