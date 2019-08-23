import { UNPAIR } from '../actions';

export default function (state = null, action) {
    if (action.error) {
        action.type = 'HANDLE_XHR_ERROR';
    }

    switch (action.type) {
        case UNPAIR:
            return action.payload.data;
        default:
            return state;
    }
}
