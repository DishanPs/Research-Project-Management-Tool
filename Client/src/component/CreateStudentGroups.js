import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import StudentSideNavBar from './StudentSideNavBar';


const CreateStudentGroups = () => {
    const [validated, setvalidated] = useState(false);
    const [lid, setLeaderID] = useState("");
    const [lname, setLeaderName] = useState("");
    const [number, setContactNo] = useState("");
    const [email, setEmail] = useState("");
    const [m2id, setMember2Id] = useState("");
    const [m2name, setMember2Name] = useState("");
    const [m3id, setMember3Id] = useState("");
    const [m3name, setMember3Name] = useState("");
    const [m4id, setMember4Id] = useState("");
    const [m4name, setMember4Name] = useState("");
    const [gname, setGroupName] = useState("");


    const checkSubmit = (event) => {
    
        const newGroup = {
            "leaderID": lid,
            "leaderName": lname,
            "contactNo": number,
            "email": email,
            "member2ID": m2id,
            "member2Name": m2name,
            "member3ID": m3id,
            "member3Name": m3name,
            "member4ID": m4id,
            "member4Name": m4name,
            "groupName": gname,
        }

    

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        else {
            
        
            axios
                .post("http://localhost:5000/group/register", newGroup)
                .then(() =>
                    alert("Successful"),
                    navigate('/studentdashboard'))
                .catch((err) =>
                     alert(err));
            
        }
        setvalidated(true);
      };

      const navigate = useNavigate();




  return (
    <div
      style={{
        backgroundImage: `url("https://previews.123rf.com/images/pitinan/pitinan1906/pitinan190602138/124697511-team-of-young-students-studying-in-a-group-project-in-the-park-of-university-or-school-happy-learnin.jpg")`,
        height: "130vh",
        backgroundSize: "cover",
      }}
    >
      <StudentSideNavBar />
      <div style={{ marginLeft: "200px" }}>
        <center>
          <h2 style={{ color: "white" }}>Register Student Groups</h2>
        </center>

        <div className="creategroupform">
          <Form noValidate validated={validated} onSubmit={checkSubmit}>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="lid">
                  <Form.Label>Leader's Student ID</Form.Label>
                  <Form.Control
                    placeholder="Leader's Student ID"
                    value={lid}
                    onChange={(e) => setLeaderID(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>

              <Col>
                <Form.Group className="mb-3" controlId="lname">
                  <Form.Label>Leader's Name</Form.Label>
                  <Form.Control
                    placeholder="Leader's Name"
                    value={lname}
                    onChange={(e) => setLeaderName(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3" controlId="number">
              <Form.Label>Leader's Contact No.</Form.Label>
              <Form.Control
                type="text"
                placeholder="Leader's Contact No."
                pattern="[0-9]{10}"
                value={number}
                onChange={(e) => setContactNo(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Leader's Email</Form.Label>
              <Form.Control
                pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$"
                placeholder="abc@def.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="m2id">
                  <Form.Label>Member 2 Student ID</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Member 2 Student ID"
                    value={m2id}
                    onChange={(e) => setMember2Id(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>

              <Col>
                <Form.Group className="mb-3" controlId="m2name">
                  <Form.Label>Member 2 Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Member 2 Name"
                    value={m2name}
                    onChange={(e) => setMember2Name(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="m3id">
                  <Form.Label>Member 3 Student ID</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Member 3 Student ID"
                    value={m3id}
                    onChange={(e) => setMember3Id(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>

              <Col>
                <Form.Group className="mb-3" controlId="m3name">
                  <Form.Label>Member 3 Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Member 3 Name"
                    value={m3name}
                    onChange={(e) => setMember3Name(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="m4id">
                  <Form.Label>Member 4 Student ID</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Member 4 Student ID"
                    value={m4id}
                    onChange={(e) => setMember4Id(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>

              <Col>
                <Form.Group className="mb-3" controlId="m4name">
                  <Form.Label>Member 4 Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Member 4 Name"
                    value={m4name}
                    onChange={(e) => setMember4Name(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3" controlId="gname">
              <Form.Label>Group Name</Form.Label>
              <Form.Control
                placeholder="Group Name"
                value={gname}
                onChange={(e) => setGroupName(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="success" type="submit">
              Create Group
            </Button>
          </Form>
        </div>

        <br />
      </div>
    </div>
  );
}

export default CreateStudentGroups