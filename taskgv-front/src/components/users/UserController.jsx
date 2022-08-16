import axios from "axios";

const getUser = async (id) => {
    try {
        const userUrl = process.env.REACT_APP_USERS_URL + id
        const response = await axios.get(userUrl, { withCredentials: true });
        return response.data[0]
    } catch (err) {
        console.error(err);
    }
}

const deleteUser = async (id) => {
    try {
        const userUrl = process.env.REACT_APP_USERS_URL + id
        await axios.delete(userUrl, {withCredentials: true});

    } catch (err) {
        console.log(err);
    }
}

const UserController = {
    getUser,
    deleteUser
};

export default UserController;

// {403 forbidden,
//     "message": "Request failed with status code 403",
//     "name": "AxiosError",
//     "config": {
//     "transitional": {
//         "silentJSONParsing": true,
//             "forcedJSONParsing": true,
//             "clarifyTimeoutError": false
//     },
//     "transformRequest": [
//         null
//     ],
//         "transformResponse": [
//         null
//     ],
//         "timeout": 0,
//         "xsrfCookieName": "XSRF-TOKEN",
//         "xsrfHeaderName": "X-XSRF-TOKEN",
//         "maxContentLength": -1,
//         "maxBodyLength": -1,
//         "env": {
//         "FormData": null
//     },
//     "headers": {
//         "Accept": "application/json, text/plain, */*"
//     },
//     "withCredentials": true,
//         "method": "delete",
//         "url": "http://localhost:5000/api/users/10"
// },
//     "code": "ERR_BAD_REQUEST",
//     "status": 403
// }