import React from "react";
import "./App.css";
import {BrowserRouter as Route, Router, Switch} from "react-router-dom";
import Home from "./component/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import SubTypes from "./component/SubTypes";

function App(){
return(
    <div>
        {/* <Home/> */}
        <SubTypes />
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
