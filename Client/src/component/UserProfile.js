import React, { Component } from 'react'
import { Button } from "react-bootstrap";
import { useState, useEffect } from 'react';
//import Modalnew from './UserModalUpdate.js';
import Profile from './UserCard.js';
// import Modaldelete from './UserModalDelete.js';
import axios from 'axios';

import { useNavigate } from "react-router-dom";

 

const UserProfile = () => {
    const navigate = useNavigate();
    
        const[modleType,setModaltype] = useState("")
            const [modalShow, setModalShow] = React.useState(false);
            const [modalDelete, setModalDelete] = React.useState(false);

            const token =JSON.parse(sessionStorage.getItem("token"));

            const[profiledetails, setProfiledetails] = useState([]);
            useEffect(() =>{
                const email = token.email;
                console.log(token.email);
                const details = {"email" :token.email}
                axios.get(`http://localhost:5000/user/users/${token.email}`)
                .then((res) =>{
                    console.log(res.data.data);
                    setProfiledetails(res.data.data);
                })
                .catch ((err) => {alert(err)})
            },[]);
            
            
            return (
            <div 
            style = {{
                backgroundImage: `url("https://vistapointe.net/images/tea-plantation-1.jpg")`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: "cover" }}
                >
                <center> 
                <div >
                <br /><br />
                 <h3>User Profile</h3>
                <Profile profile = {profiledetails.data} />

                <Button variant="primary" onClick={() => setModalShow(true)}>
                    Update Details
                </Button>
                &nbsp;&nbsp;
                <Button variant="danger" onClick={() => { setModalDelete(true); setModaltype("delete")}}>
                    Delete Account
                </Button>
                <Button variant="danger" onClick={() => { setModalDelete(true); setModaltype("logout")}}>
                    Logout
                </Button>
                <br /><br />
                {/* <Modalnew
                show={modalShow}
                onHide={() => setModalShow(false)}
                profile = {profiledetails}
                />
                <Modaldelete
                        show={modalDelete}
                        type = {modleType}
                onHide={() => setModalDelete(false)}
                profile = {profiledetails}
                /> */}
            
            </div></center>   
            </div>
            )
            
}
 
export default UserProfile
