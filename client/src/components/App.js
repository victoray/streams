import React from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom";

const pageOne = () => {
    return (
        <div className="container bg-success text-white">
            <Link to={"/pagetwo"}>Go to Page Two</Link>
        </div>
    );
};
const pageTwo = () => {
    return (
        <div className="container">
            <Link to={"/"}>Go to Page One</Link>
        </div>
    );
};

function App() {
    return (
        <div>
            <BrowserRouter>
                <Route path={"/"} exact component={pageOne}/>
                <Route path={"/pagetwo"} component={pageTwo}/>
            </BrowserRouter>
        </div>
    );
}

export default App;
