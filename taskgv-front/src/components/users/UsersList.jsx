/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import UsersListCard from './UsersListCard';
import axios from 'axios'

function UsersList() {

    const [usersList, setUsersList] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    const usersUrl = process.env.REACT_APP_USERS_URL
    
    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getUsers = async () => {
            try {
                const response = await axios.get(usersUrl, {
                    withCredentials: true
                });

                //console.log(response.data);
                isMounted && setUsersList(response.data);

            } catch (err) {
                console.error(err);
                navigate('/login', { state: { from: location }, replace: true });
            }
        }

        getUsers();

        return () => {
            isMounted = false;
            controller.abort();
        }
    }, [])

    const usersLength = usersList.length
    
    return (
    
    <div>
        <article>
            <h2>Liste des utilisateurs</h2>
            {usersLength
                ? (
                    <ul>
                        {usersList.map((user) => {
                            return <UsersListCard
                                key={user.id}
                                firstname={user.firstname}
                                lastname={user.lastname}
                                email={user.email}
                            />
                        })}
                    </ul>
                ) : <p>No users to display</p>
            }


        </article>
    </div>

    )
}

export default UsersList

