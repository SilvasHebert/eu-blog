import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from "react-router-dom"
import Content from "./main/Content"
import Menu from "./main/Menu";
import Footer from "./main/Footer";
import "./App.css"


export default (props) => {
    return (
        <div className="App">
            <Router>
                <Menu/>
                <Content/>
                <Footer/>
            </Router>
        </div>
    )
};
