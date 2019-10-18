import React from 'react';
import {deleteStream, getStream} from "../../actions";
import {connect} from 'react-redux';
import Modal from "./Modal";
import history from "../../history";

class StreamDelete extends React.Component {

    onClick = () => {
        this.props.deleteStream(this.props.stream.id);
        history.push("/")
    };

    actions = (
        <React.Fragment>
            <div className="ui red basic cancel inverted button">
                <i className="remove icon"/>
                No
            </div>
            <div onClick={this.onClick} className="ui green ok inverted button">
                <i className="checkmark icon"/>
                Yes
            </div>
        </React.Fragment>);

    onCancel = () => {
        history.push("/");
    };

    componentDidMount() {
        this.props.getStream(this.props.match.params.id)
    }

    render() {
        if (!this.props.stream) {
            return (
                <div className="ui segment">
                    <div className="ui active dimmer">
                        <div className="ui massive text loader">Loading</div>
                    </div>
                </div>)
        }
        const {stream} = this.props;
        return (
            <Modal header={"Delete Stream"} stream={"test"}
                   message={`Are you sure you want to delete ${stream.title}?`}
                   onClick={this.onClick}
                   actions={this.actions}
                   onDismiss={() => history.push("/")}
            />
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {stream: state.streams[ownProps.match.params.id]}
};

export default connect(mapStateToProps, {deleteStream, getStream})(StreamDelete);