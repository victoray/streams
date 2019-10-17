import React from "react";
import {connect} from 'react-redux';
import {SignIn} from '../actions';
import {SignOut} from '../actions';

class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load("client:auth2", () => {
            window.gapi.client.init({
                clientId: "165883541816-5e1l4gnqbitqg5v04u91cc064r48e53l.apps.googleusercontent.com",
                scope: "profile email"
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChanged(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChanged);
            });
        });
    }

    onAuthChanged = (isSignedIn) => {
        return (isSignedIn) ? this.props.SignIn() : this.props.SignOut();
    };

    onSignOutClick = () => {
        this.auth.signOut();
    };

    onSignInClick = () => {
        this.auth.signIn();
    };

    render() {
        return ((this.props.isSignedIn) ?
                <button onClick={this.onSignOutClick} type="button" className="ui google red button">Sign Out</button> :
                <button onClick={this.onSignInClick} className="ui google blue button">
                    <i className="google icon"/>
                    Sign In
                </button>
        );
    }
}

const mapStateToProps = (state) => {
    return {isSignedIn: state.auth.isSignedIn};
};
export default connect(mapStateToProps, {
    SignIn, SignOut
})(GoogleAuth);