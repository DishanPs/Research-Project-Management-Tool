import React from "react";
import "./App.css";
import {BrowserRouter as Route, Router, Switch} from "react-router-dom";
import Home from "./component/Home";
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
return(
    <div>
        <Home/>
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
