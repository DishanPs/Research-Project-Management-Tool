import React from 'react'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const StudentDashboard = () => {
  return (
    <div style = {{
        backgroundImage: `url("https://www.racksolutions.com/news//app/uploads/Data-Center-Trends-1-1.png")`,
        height: "100vh",
        backgroundSize: "cover",}} >

        <br />   
        &nbsp;&nbsp;&nbsp;
        <Link to = '/creategroups'>
            <Button variant = "outline-light">
                Create New Group
            </Button>
        </Link>

        <br />   
        &nbsp;&nbsp;&nbsp;
        <Link to = '/registertopic'>
            <Button variant = "outline-light">
                Register Research Topic
            </Button>
        </Link>

        <br />   
        &nbsp;&nbsp;&nbsp;
        <Button variant = "outline-light"  
            onClick={() => {
                    window.open("https://outlook.office.com", "_blank");
        }}>
            Request Supervisor
        </Button>

        <br />   
        &nbsp;&nbsp;&nbsp;
        <Button variant = "outline-light"
            onClick={() => {
            window.open("https://outlook.office.com", "_blank");
        }}>
            Request Co-supervisor
        </Button>
          
    </div>
  )
}

export default StudentDashboard