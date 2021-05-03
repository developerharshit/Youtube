import auth from './auth'
import { api } from '../api'

// const client = async (route, body = {}) => {
//     let response;
//     try {
//         if (!body) {
//             console.log(body);
//             // response = await api.post(route, body)
//         }
//         else {
//             // response = await api.get(route)
//         }
//     }
//     catch (ex) {
//         if (ex.response && ex.response.status === 400) {
//             console.log(ex.response.data.message);
//         }
//     }
// }

const timeSince = (timestamp) => {
    const seconds = Math.floor((new Date() - new Date(timestamp)) / 1000);

    let interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
        return interval + " years";
    }

    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        return interval + " months";
    }

    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        return interval + " days";
    }

    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return interval + " hours";
    }

    interval = Math.floor(seconds / 60);
    if (interval > 1) {
        return interval + " minutes";
    }

    return Math.floor(seconds) + " seconds";
};

export {
    auth,
    timeSince,
}