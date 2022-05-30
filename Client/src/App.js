import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import SubTypes from "./component/SubTypes";
import SubDoc from "./component/SubDoc";
import UploadDoc from "./component/UploadDoc";
import UploadTemp from "./component/UploadTemp";
import DownloadTemp from "./component/DownloadTemp";
import CreateStudentGroups from "./component/CreateStudentGroups";
import RegisterResearchTopic from "./component/RegisterResearchTopic";
import AcceptRejectTopic from "./component/AcceptRejectTopic";
import ResearchGroups from "./component/ResearchGroups";
import TopicApprovalStudent from "./component/TopicApprovalStudent";
import RRChat from "./component/RRChat";
import About from "./component/About";
import StudentReg from "./component/StudentReg";
import UserLogin from "./component/UserLogin";
import StaffReg from "./component/StaffReg";
import UserCard from "./component/UserCard";
import UserProfile from "./component/UserProfile";
import AdminStudentView from "./component/AdminStudentView";
import AdminStaffView from "./component/AdminStaffView";
import StudentStaffView from "./component/StudentStaffView";
import SupRequestsStaffView from "./component/SupRequestsStaffView";
import SupRequestsStudentView from "./component/SupRequestsStudentView";
import CoSupRequestsStaffView from "./component/CoSupRequestsStaffView";
import CoSupRequestsStudentView from "./component/CoSupRequestsStudentView";
import RequestSup from "./component/RequestSup";
import RequestCoSup from "./component/RequestCoSup";
import StudentSub from "./component/UpForm/StudentSub";
import SubLinks from "./component/SubLinks";
import CreateChatChannel from "./component/CreateChatChannel";
import EvaluateDocument from "./component/EvaluateDocument";
import EvaluatePresentation from "./component/EvaluatePresentation";
import CreateMarkingScheme from "./component/CreateMarkingScheme";
import ResearchGroupsStudents from "./component/ResearchGroupsStudents";

function App(){
return(
    <div>
        <BrowserRouter>
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/creategroups" exact element={<CreateStudentGroups />} />
            <Route path="/viewgroups" exact element={<ResearchGroups />}/>
            <Route path="/registertopic" exact element={<RegisterResearchTopic />} />
            <Route path="/viewtopics" exact element={<AcceptRejectTopic />} />
            <Route path="/studenttopicapproval" exact element={<TopicApprovalStudent />} />
            <Route path="/chat" exact element={<RRChat />} />
            <Route path="/about" exact element={<About />} /> 
            <Route path="/createchanel" exact element={<CreateChatChannel />} />
            <Route path="/evaluatedocument" exact element={<EvaluateDocument />} />
            <Route path="/evaluatepresentation" exact element={<EvaluatePresentation />} />
            <Route path="/createmarking" exact element={<CreateMarkingScheme/>}/>
            <Route path="/Userlogin" exact element={<UserLogin/>}/>
            <Route path="/Studentreg" exact element={<StudentReg/>}/>
            <Route path="/Staffreg" exact element={<StaffReg/>}/>
            <Route path="/Usercard" exact element={<UserCard/>}/>
            <Route path="/Userprofile" exact element={<UserProfile />} />
            <Route path="/Adminstudentview" exact element={<AdminStudentView/>}/>
            <Route path="/Adminstaffview" exact element={<AdminStaffView/>}/>
            <Route path="/Studentstaffview" exact element={<StudentStaffView/>}/>
            <Route path="/requestsup" exact element={<RequestSup />}/>
            <Route path="/requestcosup" exact element={<RequestCoSup />}/>
            <Route path="/supstaff" exact element={<SupRequestsStaffView />}/>
            <Route path="/supstudent" exact element={<SupRequestsStudentView />}/>
            <Route path="/cosupstaff" exact element={<CoSupRequestsStaffView />}/>
            <Route path="/cosupstudent" exact element={<CoSupRequestsStudentView />}/>
            <Route path="/subtypes" exact element={<SubTypes/>} />
            <Route path="/subtypes/:id" exact element={<SubDoc/>} />
            <Route path="/subdoc" exact element={<SubDoc/>} />
            <Route path="/uploaddoc" exact element={<UploadDoc/>} />
            <Route path="/uploadtemp" exact element={<UploadTemp/>} />
            <Route path="/downloadtemp" exact element={<DownloadTemp/>} />
            <Route path="/studentsub" exact element={<StudentSub/>} />    
            <Route path="/sublinks" exact element={<SubLinks/>} />
            <Route path="/downloadtemp" exact element={<DownloadTemp/>} />    
            <Route path="/viewgroupsstd" exact element={<ResearchGroupsStudents/>} />  
        </Routes>
      </BrowserRouter>
    </div>
)
}

export default App;
