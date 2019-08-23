import { combineReducers } from 'redux';
import StatisticsReducer from './reducer_statistics';
import UnpairReducer from './reducer_unpair';
import SetLoginReducer from './reducer_set_login';

const rootReducer = combineReducers({
    statistics: StatisticsReducer,
    unpairResult: UnpairReducer,
    login: SetLoginReducer
});

export default rootReducer;
