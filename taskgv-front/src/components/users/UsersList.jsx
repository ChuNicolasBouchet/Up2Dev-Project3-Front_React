/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import UsersListTile from './UsersListTile';
import SearchUser from "./SearchUser";
import axios from 'axios'

function UsersList() {

    const [usersList, setUsersList] = useState([]);
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);
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

    // console.log(usersList)

    useEffect(() => {
        const filteredResults = usersList.filter((user) =>
            ((user.lastname).toLowerCase()).includes(search.toLowerCase())
            || ((user.firstname).toLowerCase()).includes(search.toLowerCase())
            || ((user.email).toLowerCase()).includes(search.toLowerCase()));
        setSearchResults(filteredResults.reverse());
    }, [usersList, search])

    const usersLength = usersList.length
    
    return (
    
    <div className="user-list__main">
            <SearchUser search={search} setSearch={setSearch} />
            <h2 className="user-list__title">Liste des utilisateurs</h2>
            {usersLength
                ? (
                    <ul className="user-list__board">
                        {searchResults.map((user) => {
                            return <UsersListTile
                                key={user.id}
                                id={user.id}
                                firstname={user.firstname}
                                lastname={user.lastname}
                                email={user.email}
                            />
                        })}
                    </ul>
                ) : <p>Pas d&apos;utilisateur à afficher</p>
            }
    </div>

    )
}

export default UsersList

