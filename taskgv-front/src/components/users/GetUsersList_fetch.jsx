// import React from 'react'
import React, {useContext} from 'react'
import AuthContext from "../../context/AuthProvider.js"

function GetUsersList() {

    const { auth } = useContext(AuthContext);

    fetch('http://localhost:5000/api/users', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${auth.jwt}`
        }
    }
    )
    .then((response) => {
        console.log(response.data);
    }
    )

    return (
    <div>GetUsersList</div>
    )
}


export default GetUsersList


