import React from 'react'
//import React, {useContext} from 'react'
//import AuthContext from "../../context/AuthProvider.js"
import axios from 'axios'

function GetUsersList() {
    //const { auth } = useContext(AuthContext);
    axios.get('http://localhost:5000/api/users', {
        withCredentials: true
        }
    )
    .then((response) => {
        console.log(response.data);
    })  
    return (
    <div>GetUsersList</div>
    )
}

export default GetUsersList

