import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './components/login';
import Navbar from './components/navbar';
import Statistics from './components/statistics';
import Unpair from './components/unpair';

class App extends Component {
    render() {
        return (
                <BrowserRouter>
                    {this.props.login.token && <Navbar />}
                    <Switch>
                        {this.props.login.token && <Route path="/statistics" component={Statistics}/>}
                        {this.props.login.token && <Route path="/unpair" component={Unpair}/>}
                        {this.props.login.token && <Redirect from="/login" to="/unpair" />}
                        {!this.props.login.token && <Route path="/login" component={Login}/>}
                        <Redirect to="/login" />
                    </Switch>
                </BrowserRouter>
        );
    }
}

function mapStateToProps(state) {
    return {
        login: state.login
    };
}

export default connect(mapStateToProps)(App);
