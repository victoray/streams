import React from 'react';
import {connect} from "react-redux";
import {editStream, getStream} from "../../actions";
import StreamForm from "./StreamForm";
import Spinner from "../Spinner";

class StreamEdit extends React.Component {

    onSubmit = (formValues) => {
        this.props.editStream(this.props.stream.id, formValues);
    };


    componentDidMount() {
        this.props.getStream(this.props.match.params.id)
    }

    render() {
        if (!this.props.stream) {
            return <Spinner/>
        }

        const stream = this.props.stream;
        return (
            <div className={"ui inverted container"}>
                <h1 style={{color: 'white', alignContent: 'center'}}>Edit Stream</h1>
                <StreamForm onSubmit={this.onSubmit}
                            initialValues={{title: stream.title, description: stream.description}}/>
            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    return {stream: state.streams[ownProps.match.params.id]}
};

export default connect(mapStateToProps, {editStream, getStream})(StreamEdit);