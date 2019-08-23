import axios from 'axios';

const
    UNPAIR_URL = 'http://localhost:3003/unpair',
    STATISTICS_URL = 'http://localhost:3003/statistics';


export const
    UNPAIR = 'unpair',
    STATISTICS = 'statistics',
    SETLOGIN = 'setLogin'
;

export function sendForUnpair(userId, arr) {
    const request = axios.post(UNPAIR_URL, {userId: userId, data: arr});

    return {
        type: UNPAIR,
        payload: request
    }
}

export function getStatistics(userId) {
    const url = `${STATISTICS_URL}/${userId}`;
    const request = axios.get(url);

    return {
        type: STATISTICS,
        payload: request
    }
}

export function setLogin(token, userId) {
    return {
        type: SETLOGIN,
        payload: {token: token, userId: userId}
    }
}

