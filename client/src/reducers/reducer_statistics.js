import { STATISTICS } from '../actions';

export default function (state = [], action) {
    switch (action.type) {
        case STATISTICS:
            return action.payload.data;
        default:
            return state;
    }
}
