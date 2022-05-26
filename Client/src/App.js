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
import SupRequestsStaffView from "./component/SupRequestsStaffView";
import SupRequestsStudentView from "./component/SupRequestsStudentView";
import CoSupRequestsStaffView from "./component/CoSupRequestsStaffView";
import CoSupRequestsStudentView from "./component/CoSupRequestsStudentView";
import RequestSup from "./component/RequestSup";
import RequestCoSup from "./component/RequestCoSup";




function App(){
return(
    <div>
        

        <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/creategroups" exact element={<CreateStudentGroups />} />
          <Route path="/viewgroups" exact element={<ResearchGroups />}/>
          <Route path="/registertopic" exact element={<RegisterResearchTopic />} />
          <Route path="/viewtopics" exact element={<AcceptRejectTopic />} />
          <Route path="/studentdashboard" exact element={<StudentDashboard />} />
          <Route path="/studenttopicapproval" exact element={<TopicApprovalStudent />} />

          <Route path="/requestsup" exact element={<RequestSup />}/>
          <Route path="/requestcosup" exact element={<RequestCoSup />}/>
          <Route path="/supstaff" exact element={<SupRequestsStaffView />}/>
          <Route path="/supstudent" exact element={<SupRequestsStudentView />}/>
          <Route path="/cosupstaff" exact element={<CoSupRequestsStaffView />}/>
          <Route path="/cosupstudent" exact element={<CoSupRequestsStudentView />}/>
          
          
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
)
}

export default App;
