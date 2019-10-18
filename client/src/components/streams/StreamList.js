import React from 'react';
import {connect} from 'react-redux'
import {getStreams} from '../../actions'
import {Link} from "react-router-dom";

class StreamList extends React.Component {
    componentDidMount() {
        this.props.getStreams()
    }

    renderCreateButton = () => {
        return (this.props.isSignedIn) ?
            <div style={{textAlign: 'right'}}>
                <Link to={'/streams/new'} className={"ui inverted blue button"}> Create Stream</Link>
            </div> :
            null
    };

    renderButton = (stream) => {
        return (stream.userId === this.props.currentUserId) ?
            <div className={"right floated content"}>
                <Link to={`/streams/edit/${stream.id}`} className="ui primary button">Edit</Link>
                <Link to={`/streams/delete/${stream.id}`} className="ui button negative"> Delete</Link>
            </div> :
            null
    };

    renderList() {
        return this.props.streams.map(stream => {
            return (
                <div className="item" key={stream.id}>
                    {this.renderButton(stream)}
                    <i className={"large middle aligned icon video ui"}/>
                    <div className="content">
                        <div className="header">
                            <Link to={`/streams/${stream.id}`}>{stream.title}</Link>
                        </div>
                        <div className={"description"}>{stream.description}</div>
                    </div>

                </div>)
        });
    }

    render() {

        return (
            <div className={"ui container"}>
                <div className={"ui inverted container segment"} style={{marginTop: '10px'}}>
                    <h1> Streams </h1>
                    <div className="ui inverted celled list">
                        {this.renderList()}
                    </div>
                </div>
                < div>
                    {this.renderCreateButton()}
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
};

export default connect(mapStateToProps, {getStreams})(StreamList);