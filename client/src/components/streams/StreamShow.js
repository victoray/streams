import React from 'react';
import {connect} from 'react-redux';
import {getStream} from "../../actions";
import Spinner from "../Spinner";
import './StreamShow.css';
import flv from 'flv.js'


class StreamShow extends React.Component {

    constructor(props) {
        super(props);
        this.videoRef = React.createRef();
    }

    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.getStream(id);
        this.createPlayer();
    }

    createPlayer = () => {
        const {id} = this.props.match.params;

        if (this.videoRef.current) {
            this.player = flv.createPlayer({
                type: 'flv',
                url: `http://localhost:18000/live/${id}.flv`
            });
            this.player.attachMediaElement(this.videoRef.current);
            this.player.load();
        }
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.createPlayer();
    }

    componentWillUnmount() {
        this.player.destroy();
    }

    render() {

        if (!this.props.stream) {
            return (<Spinner/>)
        }

        const {title, description} = this.props.stream;


        return (<div className={"ui container"} style={{marginTop: '10px'}}>
            <div className={"ui inverted segment"}>
                <video ref={this.videoRef} controls/>
            </div>

            <div className={"stream"}>
                <h1>{title}</h1>
                <div className={"content"}>
                    <p className={"description"}>{description}</p>
                </div>
            </div>
        </div>)
    }
}

const mapStateToProps = (state, ownProps) => {
    return {stream: state.streams[ownProps.match.params.id]}
};

export default connect(mapStateToProps, {getStream})(StreamShow);