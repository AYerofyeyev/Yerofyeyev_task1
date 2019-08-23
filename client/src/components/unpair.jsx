import React from 'react';

import InputForm from './inputform';
import UnpairResult from './unpair_result';

export default props => {
    return (
        <div className="row">
            <InputForm />
            <UnpairResult />
        </div>
    );
}