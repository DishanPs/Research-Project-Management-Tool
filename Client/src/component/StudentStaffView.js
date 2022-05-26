import React from 'react'
import { Table } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import {useState, useEffect } from "react";

import axios from "axios";

 


const AdminStudentView = () => {
     const [AdminStudentViews, setAdminStudentView] = useState([]);

    useEffect(() => {
      const getAdminStudentViews = () => {
        axios
          .get("http://localhost:5000/staff")
          .then((res) => {
            setAdminStudentView(res.data);
            console.log(res.data);
          })
          .catch((err) => {
            alert(err.msg);
          });
      };
      getAdminStudentViews();
    });
    
    
    return (
      <div className='stable'> 
        
            <center><h1>Staff</h1></center>

            <hr></hr>
            <center>
            <Button   variant="danger">Request Supervisor</Button> 
            <Button   variant="success">Request Corsupervisor</Button> 
            </center>
            <hr></hr>

           <Table striped bordered hover variant='dark'>
             <thead>
              <tr>
                
                <th>Email</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>ContactNo</th>
                <th>Reserch Interest</th>
                <th>Faculty</th>
                
              </tr>
             </thead>
             {AdminStudentViews.map((AdminStudentView) => (
             <tbody key={AdminStudentView._id}>

              <tr>
                
                <td>{AdminStudentView.email}</td>
                <td>{AdminStudentView.firstName}</td>
                <td>{AdminStudentView.lastName}</td>
                <td>{AdminStudentView.contactNo}</td>
                <td>{AdminStudentView.researchInterest}</td>
                <td>{AdminStudentView.faculty}</td>
                
              </tr>
            </tbody>
        
            ))}
          </Table>

          

          </div>  
        
    )
}

export default AdminStudentView