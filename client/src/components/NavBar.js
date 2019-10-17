import React from "react";
import {Link} from "react-router-dom";
import logo from '../statics/logo.jpg';
import GoogleAuth from "./GoogleAuth";

const NavBar = () => {
    return (
        <div className="ui borderless inverted  menu">
            <div className="item">
                <Link to={"/"}><img src={logo} width={30} alt={""}/></Link>
            </div>
            <Link to={"/"} className={"red item"}>
                {"Streamer"}
            </Link>
            <div className="right menu">
                <Link className="red item" to={"/streams"}>Streams</Link>
                <div className="item">
                    <GoogleAuth/>
                </div>
            </div>
        </div>

    );
};

export default NavBar;