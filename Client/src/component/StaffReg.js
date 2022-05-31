import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import Row from "react-bootstrap/Row";
import Header from "./Header";
import Footer from "./Footer";

const bcrypt = require("bcryptjs");

const StaffReg = () => {
  const [validated, setvalidated] = useState(false);
  const [ids, setId] = useState("");
  const [email, setEmail] = useState("");
  const [fname, setFirstName] = useState("");
  const [lname, setLastName] = useState("");
  const [contactno, setContactNo] = useState("");
  const [nic, setNIC] = useState("");
  const [interest, setInterest] = useState("");
  const [fclty, setFaculty] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setConfirmPassword] = useState();

  const checkSubmit = (event) => {
    console.log(password);
    const newUser = {
      ID: ids,
      email: email,
      firstName: fname,
      lastName: lname,
      contactNo: contactno,
      NIC: nic,
      researchInterest: interest,
      faculty: fclty,
      type: "Staff",
    };

    const newLogin = {
      iD: ids,
      email: email,
      type: "Staff",
      password: bcrypt.hashSync(password, bcrypt.genSaltSync()),
    };

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      if (cpassword == password) {
        axios
          .post("http://localhost:5000/staff/register", newUser)
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
      <div className="Containerregstf">
        <div className="wrapperregstf">
          <div className="titlereg">
            <h1>Create Profile</h1>
            <div className="loginformreg">
              <Form noValidate validated={validated} onSubmit={checkSubmit}>
                <Row>
                  <Form.Group className="inputreg" controlId="iD">
                    <Form.Label>Staff ID</Form.Label>
                    <Form.Control
                      placeholder="STFC123456"
                      pattern="STF[A-Z]{1}\d{6}"
                      value={ids}
                      onChange={(e) => setId(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="inputreg" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="abcccc.d@sliit.lk"
                      pattern="[a-z]{2,}.[a-z]{1}@sliit.lk"
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

                <Form.Group className="inputreg" controlId="interest">
                  <Form.Label>Research Interest</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Enter your research interest"
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    required
                  />
                </Form.Group>

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

export default StaffReg;
