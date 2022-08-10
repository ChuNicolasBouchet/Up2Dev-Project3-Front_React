import axios from "axios";

const getUser = async (id) => {
    try {
        const userUrl = process.env.REACT_APP_USERS_URL + id
        const response = await axios.get(userUrl, {
            withCredentials: true
        });
        return response.data[0]
    } catch (err) {
        console.error(err);
    }
}

const UserController = {
    getUser
};

export default UserController;