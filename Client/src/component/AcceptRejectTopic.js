import React from 'react'
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

const AcceptRejectTopic = () => {
    const [topics, setTopic] = useState([]);

   
    // useEffect(() => {
    //     const getCustomers = () => {
    //       axios
    //         .get("http://localhost:5000/customer")
    //         .then((res) => {
    //           setCustomer(res.data);
    //         })
    //         .catch((err) => {
    //           alert(err.msg);
    //         });
    //     };
    //     getCustomers();
    //   },[]);
    



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
            
            <Table striped bordered hover style={{color:"white"}}>
                <thead>
                <tr>
                    <th>Group ID</th>
                    <th>Group Name</th>
                    <th>Research Topic</th>
                    <th>Accept</th>
                    <th>Reject</th>
                   
                </tr>
                </thead>
                {/* {customers.map((customer) => (
                <tbody key={customer._id}>
                    <tr>
                    <td>{customer.CustomerID}</td>
                    <td>{customer.firstName}</td>
                    <td>{customer.lastName}</td>
                    <td>{customer.email}</td>
                    <td>{customer.contactNo}</td>
                    
                    </tr>
                </tbody>
                ))} */}
             </Table>

        </div>
    </div>
  )
}

export default AcceptRejectTopic