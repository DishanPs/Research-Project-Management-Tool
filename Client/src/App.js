import React from "react";
import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./component/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./component/Header";
import Footer from "./component/Footer";
import CreateStudentGroups from "./component/CreateStudentGroups";
import RegisterResearchTopic from "./component/RegisterResearchTopic";
import AcceptRejectTopic from "./component/AcceptRejectTopic";
import ResearchGroups from "./component/ResearchGroups";
import StudentDashboard from "./component/StudentDashboard";
import TopicApprovalStudent from "./component/TopicApprovalStudent";
import RRChat from "./component/RRChat";
import About from "./component/About";

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
          <Route path="/studentdashboard" exact element={<StudentDashboard />} />
          <Route path="/studenttopicapproval" exact element={<TopicApprovalStudent />} />
        <Route path="/chat" exact element={<RRChat />} />
        <Route path="/about" exact element={<About/>}/>     
       </Routes>
      </BrowserRouter>

    </div>
)
}

export default App;
