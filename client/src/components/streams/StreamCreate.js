import React from 'react';
import {connect} from "react-redux";
import {createStream} from "../../actions";
import StreamForm from "./StreamForm";

class StreamCreate extends React.Component {

    onSubmit = (formValues) => {
        console.log(this.props);
        this.props.createStream(formValues);
    };

    render() {
        return (
            <div className={"ui inverted container"}>
                <h1 style={{color: 'white', alignContent: 'center'}}>Create A Stream</h1>
                <StreamForm onSubmit={this.onSubmit}/>
            </div>
        )
    }
}


export default connect(null, {createStream})(StreamCreate);