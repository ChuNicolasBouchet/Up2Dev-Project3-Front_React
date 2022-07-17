import httpClient from "../../api/httpClient";

const getUsers = () => {
    return httpClient.get("/users");
};

const getUser = (id) => {
    return httpClient.get(`/users/${id}`);
};

const createUser = (data) => {
    return http.post("/users", data);
};

const updateUser = (id, data) => {
    return http.put(`/users/${id}`, data);
};

const removeUser = (id) => {
    return http.delete(`/users/${id}`);
};

// const removeAllUsers = () => {
//     return http.delete(`/users`);
// };

const findByFirstName = (firstName) => {
    return http.get(`/users?firstName=${firstName}`);
};

const findByLastName = (lastName) => {
    return http.get(`/users?lastName=${lastName}`);
};


const UsersServices = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    removeUser,
    // removeAllUsers,
    findByFirstName,
    findByLastName,
};

export default UsersServices;
