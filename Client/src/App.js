import React from "react";
import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./component/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./component/Header";
import Footer from "./component/Footer";
import RRChat from "./component/RRChat";
import About from "./component/About";

function App(){
return(
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/chat" exact element={<RRChat />} />
                <Route path="/about" exact element={<About/>}/>
            </Routes>
        </BrowserRouter>
    </div>
)
}

export default App;
