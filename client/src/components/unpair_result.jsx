import React, { Component } from 'react';
import { connect } from 'react-redux';

class UnpairResult extends Component {

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    {this.props.unpairResult && ('Result: ' + (this.props.unpairResult.data ? JSON.stringify(this.props.unpairResult.data) : 'All number counts are even.'))}
                </div>
            </div>
        );
    }
}

function mapStateToProps({ unpairResult }) {
    return { unpairResult };
}

export default connect(mapStateToProps)(UnpairResult);
