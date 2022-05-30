import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import Row from "react-bootstrap/Row";
import Header from "./Header";
import Footer from "./Footer";

const bcrypt = require("bcryptjs");

const StudentReg = () => {
  const [validated, setvalidated] = useState(false);
  const [ids, setId] = useState("");
  const [email, setEmail] = useState("");
  const [fname, setFirstName] = useState("");
  const [lname, setLastName] = useState("");
  const [contactno, setContactNo] = useState("");
  const [nic, setNIC] = useState("");
  const [fclty, setFaculty] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setConfirmPassword] = useState();

  const checkSubmit = (event) => {
    console.log(password);
    const newStudent = {
      ID: ids,
      email: email,
      firstName: fname,
      lastName: lname,
      contactNo: contactno,
      NIC: nic,
      faculty: fclty,
      type: "Student",
    };

    const newLogin = {
      iD: ids,
      email: email,
      type: "Student",
      password: bcrypt.hashSync(password, bcrypt.genSaltSync()),
    };

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      if (cpassword == password) {
        axios
          .post("http://localhost:5000/student/register", newStudent)
          .then(
            (data) => console.log(data),
            swal("Submitted!", "Successfully Registered", "success")
          )
          .catch((err) => alert(err));

        axios
          .post("http://localhost:5000/login/add", newLogin)
          .then(() => swal("Submitted!", "Successfully Registered", "success"))
          .catch((err) => alert(err));
      } else {
        swal("Error !", "Password Mismatch", "error");
      }
    }
    setvalidated(true);
  };

  return (
    <div>
      <Header />
      <div className="Containerregstu">
        <div className="wrapperregstu">
          <div className="titlereg">
            <h1>Create Profile</h1>

            <div className="loginformreg">
              <Form noValidate validated={validated} onSubmit={checkSubmit}>
                <Row>
                  <Form.Group className="inputreg" controlId="iD">
                    <Form.Label>Student ID</Form.Label>
                    <Form.Control
                      placeholder="IT12345678"
                      pattern="[A-Z]{2}\d{8}"
                      value={ids}
                      onChange={(e) => setId(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="inputreg" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="it12345678@my.sliit.lk"
                      pattern="[a-z]{2}\d{8}@my.sliit.lk"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter a valid email address.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group className="inputreg" controlId="fname">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      placeholder="Enter First Name"
                      value={fname}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="inputreg" controlId="lname">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      placeholder="Enter Last Name"
                      value={lname}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </Form.Group>
                </Row>

                <Row>
                  <Form.Group className="inputreg" controlId="contactno">
                    <Form.Label>Contact No.</Form.Label>
                    <Form.Control
                      placeholder="0123456789"
                      pattern="[0-9]{10}"
                      value={contactno}
                      onChange={(e) => setContactNo(e.target.value)}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter a valid phone number.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="inputreg" controlId="nic">
                    <Form.Label>NIC</Form.Label>
                    <Form.Control
                      placeholder="Enter NIC"
                      pattern="^([0-9]{9}[x|X|v|V]|[0-9]{12})$"
                      value={nic}
                      onChange={(e) => setNIC(e.target.value)}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter a valid NIC number.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Form.Group className="inputreg">
                  <Form.Label>Faculty</Form.Label>
                  <Form.Select
                    aria-label="Feedback Type"
                    value={fclty}
                    onChange={(e) => setFaculty(e.target.value)}
                  >
                    <option selected disabled hidden>
                      Faculty Type
                    </option>
                    <option>Select your faculty</option>
                    <option>Computing</option>
                    <option>Bussiness</option>
                    <option>Engineering</option>
                    <option>Humanaties and sciences</option>
                    <option>School of Architecture</option>
                    <option>Graduate studies and reseach</option>
                    <option>School of Law</option>
                  </Form.Select>
                </Form.Group>

                <Row>
                  <Form.Group className="inputreg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter a Password"
                      pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Password must contain at least 8 characters with at least
                      one uppercase letter and a digit.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="inputreg" controlId="cpassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Re-enter the Password"
                      pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </Form.Group>
                </Row>

                <Form.Group className="inputreg" controlId="checkbox">
                  <Form.Check
                    type="checkbox"
                    label="I Agree to Terms & Conditions"
                    required
                  />
                </Form.Group>

                <Button className="butnreg" variant="success" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StudentReg;
