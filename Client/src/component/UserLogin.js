import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import axios from "axios";
import bcrypt from "bcryptjs";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
//import { Link } from "react-router-dom";
import UserModalSignup from "./UserModalSignup";

const UserLogin = () => {
  const [Modalsignup, setModalsignup] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigate1 = useNavigate();
  const navigate = (type) => {
    if (type == "Student") {
      navigate1("/");
    } else if (type == "Staff") {
      navigate1("/");
    } else if (type == "Admin") {
      navigate1("/");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.get(`http://localhost:5000/login/${email}`).then((res) => {
      if (res.data.data != null) {
        let hashPass = res.data.data.password;
        console.log(password);
        const isValid = bcrypt.compareSync(password, hashPass);
        if (isValid) {
          console.log(res.data);
          const token = {
            id: res.data.data._id,
            iD: res.data.data.iD,
            email: res.data.data.email,
            type: res.data.data.type,
          };

          sessionStorage.setItem("token", JSON.stringify(token));
          navigate(res.data.data.type);
          swal("Success!", "Login Successful", "success");
        } else {
          swal("Error !", "Invalid Password", "error");
        }
      } else {
        swal("Error !", "Invalid Email", "error");
      }
    });
  };

  return (
    <>
      <div>
        <div className="ContainerL">
          <div className="wrapperl">
            <div className="loginform">
              <h1> SIGN IN</h1>
              <hr />
              <Form onSubmit={handleSubmit}>
                <Form.Group className="input" controlId="email">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter a valid email address.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="input" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter a Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter a valid password.
                  </Form.Control.Feedback>
                </Form.Group>

                <br />
                <Button variant="success" type="submit">
                  Login
                </Button>

                <br />
                <br />

                <h5>Don't have an account ? </h5>
                {/* <Link to="/Studentreg"><Button  variant="success" >Sign Up</Button></Link> */}
                <Button variant="success" onClick={() => setModalsignup(true)}>
                  Sign Up
                </Button>
              </Form>
              <UserModalSignup
                show={Modalsignup}
                onHide={() => setModalsignup(false)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserLogin;
