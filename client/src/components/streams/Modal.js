import React from "react";
import ReactDOM from 'react-dom';
import history from "../../history";


export default (props) => {
    console.log(props);
    return ReactDOM.createPortal((
        <div onClick={props.onDismiss} className={" ui dimmer modals visible active"}>
            <div className="ui basic modal active">
                <div className="ui icon header">
                    <i className="archive icon"/>
                    {props.header}
                </div>
                <div className="content">
                    <p>{props.message}</p>
                </div>
                <div className="actions">
                    {props.actions}
                </div>
            </div>
        </div>), document.querySelector("#modal"))
};