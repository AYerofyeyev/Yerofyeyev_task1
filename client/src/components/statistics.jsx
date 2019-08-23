import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { bindActionCreators } from 'redux';

import { getStatistics } from "../actions";

class Statistics extends Component {
    constructor(props) {
        super(props);

        this.props.getStatistics(this.props.login.userId);
    }

    renderStatistics(value) {
        return(
            <tr key={value.value + Math.random()}>
                <td>
                    {value.value}
                </td>
                <td>
                    {value.count}
                </td>
            </tr>
        );
    }

    render() {
        return (
            <div className="row">
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th>Number</th>
                        <th>Count</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.props.statistics.data && this.props.statistics.data.map(this.renderStatistics)}
                    </tbody>
                </table>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        statistics: state.statistics,
        login: state.login
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getStatistics }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Statistics);
