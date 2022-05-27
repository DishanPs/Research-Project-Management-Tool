import React from 'react'
import AdminSideNavBar from './AdminSideNavBar';
import Form from "react-bootstrap/Form";
import {Row, Col} from "react-bootstrap"

const CreateMarkingScheme = () => {
  return (
    <div>
      <AdminSideNavBar />
      <div
        style={{ marginLeft: "210px", marginRight: "10px", marginTop: "10px" }}
      >
        <div style={{width: "500px", height:"100vh",backgroundColor:"whitesmoke", padding:"5px"}}>
          <center>
            <h4 style={{ color: "black" }}>Create Marking Schemes</h4>
          </center>
          <hr />
          <Form>
                      <Row>
                          <h6>General Infromations</h6>
              <Col>
                <Form.Control placeholder="Faculty" />
                          </Col>
                      </Row>
                      <Row style={{marginTop:"5px"}}>
                          <h6>Marking Criterias</h6>
              <Col>
                <Form.Control placeholder="State" />
              </Col>
              <Col>
                <Form.Control placeholder="Zip" />
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default CreateMarkingScheme