import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./component/Header";
import Footer from "./component/Footer";
import StudentReg from "./component/StudentReg";

import UserLogin from "./component/UserLogin";
import StaffReg from "./component/StaffReg";
import UserCard from "./component/UserCard";
import UserProfile from "./component/UserProfile";
import AdminStudentView from "./component/AdminStudentView";
import StudentStaffView from "./component/StudentStaffView";

function App(){
return(
    <div>
        
       <BrowserRouter>
        
          <Routes>
            <Route path="/" exact element={<Home/>}/>            
            
          <Route path="/Userlogin" exact element={<UserLogin/>}/>
          <Route path="/Studentreg" exact element={<StudentReg/>}/>
          <Route path="/Staffreg" exact element={<StaffReg/>}/>
          <Route path="/Usercard" exact element={<UserCard/>}/>
          <Route path="/Userprofile" exact element={<UserProfile/>}/>
          <Route path="/Adminstudentview" exact element={<AdminStudentView/>}/>
          <Route path="/Studentstaffview" exact element={<StudentStaffView/>}/>
          
          
     
        </Routes>
       
      </BrowserRouter>
    </div>
)
}

export default App;
