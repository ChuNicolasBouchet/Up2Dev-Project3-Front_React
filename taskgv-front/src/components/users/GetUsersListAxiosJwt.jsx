// import React from 'react'
import React, {useContext} from 'react'
import AuthContext from "../../context/AuthProvider.js"
import axios from 'axios'

function GetUsersList() {

    const { auth } = useContext(AuthContext);

    axios.get('http://localhost:5000/api/users', {
        withCredentials: true,
        headers: {
            'Authorization': `Bearer ${auth.jwt}`
        }
    }
    )
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.log(error);
    })
    

    return (
    <div>GetUsersList</div>
    )
}


export default GetUsersList



