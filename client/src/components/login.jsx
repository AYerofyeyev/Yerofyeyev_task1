import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { bindActionCreators } from 'redux';
import auth0 from 'auth0-js';

import { setLogin } from '../actions';

class Login extends Component {
    constructor(props){
        super(props);

        this.AuthenticationHandler();
    }


    auth0 = new auth0.WebAuth({
        domain: "sashc0.eu.auth0.com",
        clientID: "VA5MSQ379nNdtrp01LnOh639LM11thPS",
        redirectUri: "http://localhost:3000/login",
        responseType: "token id_token",
        scope: "openid profile"
    });

    submitHandler = (e) => {
        e.preventDefault();
        this.auth0.authorize();
    };

    AuthenticationHandler = () => {
        this.auth0.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken) {
                this.auth0.client.userInfo(authResult.accessToken, (err, profile) => {
                    this.props.setLogin(authResult.accessToken, profile.sub);
                })
            } else if (err) {
                console.log(err);
            }
        });
    };

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <h1>Test</h1>
                </div>
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <button className="btn btn-primary" onClick={this.submitHandler}>Log In</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        login: state.login
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ setLogin }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)(Login);
