import React from "react";
import {Link} from "react-router-dom";
import logo from '../statics/logo.jpg';
import GoogleAuth from "./GoogleAuth";

const NavBar = () => {
    return (
        <div className={"ui container fluid"}>
            <div className="ui borderless inverted  menu" style={{backGroundColor: 'black'}}>
                <div className="red item">
                    <Link to={"/"}><img src={logo} width={30} alt={""}/></Link>
                </div>
                <div className={"item"}>
                    <Link to={"/"} className={"ui red button"}>
                        {"Streamer"}
                    </Link>
                </div>
                <div className="right menu">
                    <Link className="red item" to={"/streams"}><h3>All Streams</h3></Link>
                    <div className="item">
                        <GoogleAuth/>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default NavBar;