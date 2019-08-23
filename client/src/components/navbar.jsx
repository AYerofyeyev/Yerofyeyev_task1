import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import  { bindActionCreators } from 'redux';

import { setLogin } from '../actions';

const Navbar = (props) => {
    return (
        <nav className="row">
            <Link to="/statistics"   className="col-md-4">
                <button className="btn btn-secondary">Statistics</button>
            </Link>
            <Link to="/unpair" className="col-md-4">
                <button className="btn btn-secondary">Unpair</button>
            </Link>
            <div className="col-md-4">
                <button className="btn btn-secondary" onClick={() => props.setLogin(null, null)}>Logout</button>
            </div>
        </nav>
    );
};

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
    mapDispatchToProps)(Navbar);
