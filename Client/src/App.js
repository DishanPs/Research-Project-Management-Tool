import React from "react";
import "./App.css";
import {BrowserRouter as Route, Router, Switch} from "react-router-dom";
import Home from "./component/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./component/Header";
import Footer from "./component/Footer";
import CreateStudentGroups from "./component/CreateStudentGroups";
import RegisterResearchTopic from "./component/RegisterResearchTopic";
import AcceptRejectTopic from "./component/AcceptRejectTopic";

function App(){
return(
    <div>
        {/* <Home/> */}
        {/* <CreateStudentGroups /> */}
        {/* <RegisterResearchTopic /> */}
        <AcceptRejectTopic />
        {/*<Router>*/}
        {/*    <div className="App">*/}
        {/*        */}
        {/*            <Route exact path="/">*/}
        {/*                <Home />*/}
        {/*            </Route>*/}
        {/*    </div>*/}
        {/*</Router>*/}
    </div>
)
}

export default App;
