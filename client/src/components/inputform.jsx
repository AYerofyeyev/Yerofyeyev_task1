import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { sendForUnpair } from "../actions";

class InputForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            values: '',
            arr: []
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({values: event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.setState({arr: this.state.values.split(',')}, () => this.props.sendForUnpair(this.props.login.userId, this.state.arr));
    }

    render() {
        return(
            <form className="input-group" onSubmit={this.onFormSubmit}>
                <input
                    className="form-control"
                    value={this.state.values}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button className="btn btn-primary" type="submit">Unpair</button>
                </span>
            </form>
        );
    }
}

function mapStateToProps(state) {
    return {
        login: state.login
    };
}

function mapDispathToProps(dispatch) {
    return bindActionCreators({ sendForUnpair }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispathToProps)(InputForm);
