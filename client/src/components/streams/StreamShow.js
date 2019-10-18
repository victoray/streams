import React from 'react';
import {connect} from 'react-redux';
import {getStream} from "../../actions";


class StreamShow extends React.Component {

    componentDidMount() {
        this.props.getStream(this.props.match.params.id)
    }

    render() {
        if (!this.props.stream) {
            return (<div className={"ui loading inverted segment"}> Loading </div>)
        }

        const {title, description} = this.props.stream;

        return (<div className={"ui inverted container"} style={{marginTop: '10px'}}>
            <div className={"ui inverted segment"}>
                <h1>{title}</h1>
                <div className={"content"}>
                    {description}
                </div>
            </div>
        </div>)
    }
}

const mapStateToProps = (state, ownProps) => {
    return {stream: state.streams[ownProps.match.params.id]}
};

export default connect(mapStateToProps, {getStream})(StreamShow);