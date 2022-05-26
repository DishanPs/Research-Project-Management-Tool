import React from "react";
import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./component/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import SubTypes from "./component/SubTypes";
import Header from "./component/Header";
import Footer from "./component/Footer";
import SubDoc from "./component/SubDoc";
import UploadDoc from "./component/UploadDoc";

function App(){
return(
    <div>

        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" exact element={<Home/>} />
                <Route path="/subtypes" exact element={<SubTypes/>} />
                <Route path="/subdoc" exact element={<SubDoc/>} />
                <Route path="/uploaddoc" exact element={<UploadDoc/>} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    </div>
)
}

export default App;
