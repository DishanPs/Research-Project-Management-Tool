import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { studentsidenavbarData } from "./SideNavBarData";
import "./NavBar.css";
import { IconContext } from "react-icons";
import { FiLogOut } from "react-icons/fi";
import UserModaldelete from "./UserModalDelete";
import { useNavigate } from "react-router-dom";

const StudentSideNavBar = () => {
  const [modalDelete, setModalDelete] = React.useState(false);
  const [modleType, setModaltype] = useState("");
  const token = JSON.parse(sessionStorage.getItem("token"));
  const navigate = useNavigate();

  const logout = () => {
    setModalDelete(true);
    setModaltype("logout");
  };

  return (
    <div>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <div
            style={{
              color: "white",
              marginLeft: "250px",
              fontSize: "20px",
              marginTop: "15px",
            }}
          >
            Panel Member
          </div>
          <div
            style={{
              color: "white",
              marginLeft: "540px",
              fontSize: "20px",
              marginTop: "15px",
            }}
            onClick={() => navigate("#profile")}
          >
            Profile
            {/* {token.email} */}
          </div>
          <div
            style={{
              color: "white",
              marginRight: "30px",
              fontSize: "20px",
              marginTop: "15px",
            }}
          >
            <FiLogOut onClick={logout} />
          </div>
        </div>

        <nav className={"nav-menu active"}>
          <ul className="nav-menu-items">
            <li className="navbar-toggle">
              <div>
                <a href="/">
                  <img
                    src="../Logo.png"
                    width="40"
                    height="40"
                    className="d-inline-block align-top"
                    alt="Project Managenet Tool logo"
                  />
                </a>
              </div>
            </li>
            {studentsidenavbarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
      <UserModaldelete
        show={modalDelete}
        type={modleType}
        onHide={() => setModalDelete(false)}
      />
    </div>
  );
};

export default StudentSideNavBar;
