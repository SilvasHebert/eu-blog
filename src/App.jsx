import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from "react-router-dom"
import Content from "./components/Content"
import Menu from "./components/Menu";
import "./App.css"


export default (props) => {
    return (
        <div className="App">
            <Router>
                <Menu/>
                <Content/>
            </Router>
        </div>
    )
};
