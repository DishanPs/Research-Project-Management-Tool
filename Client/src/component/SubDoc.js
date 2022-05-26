import React from 'react'
import Form from 'react-bootstrap/Form'
import { Link } from "react-router-dom";
import './UploadDoc'


const SubDoc = () => {
  return (
    <div>
    <center>
      <h1>Submission Type</h1>
    </center>

      <h2>Submission status</h2>

      <br/>

      <div className='cp1'>
          <label><b>Submission status: </b></label>
          <Form.Group className="mb-3">
                <Form.Label>No attempt</Form.Label>
          </Form.Group>

          <label><b>Due Date: </b></label>
          <Form.Group className="mb-3">
                <Form.Label>No attempt</Form.Label>
          </Form.Group>

          <label><b>Time Remaining: </b></label>
          <Form.Group className="mb-3">
                <Form.Label>No attempt</Form.Label>
          </Form.Group>
          
          <Link to="/uploaddoc">
          <button
                type="submit"
                style={{
                  backgroundColor: "green",
                  width: "150px",
                  height: "40px",
                  fontWeight: "bold",
                  marginLeft: "50%",
                }}>
                UPLOAD
          </button>
          </Link>
      </div>
    </div>
  )
}

export default SubDoc
