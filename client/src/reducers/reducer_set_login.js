import { SETLOGIN } from '../actions';

export default function (state = {token: null, userId: null}, action) {
    switch (action.type) {
        case SETLOGIN:
            return action.payload;
        default:
            return state;
    }
}