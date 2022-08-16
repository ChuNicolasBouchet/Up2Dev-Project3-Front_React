
import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import UsersListTile from "./UsersListTile";
import axios from 'axios'


function User() {
    const { id } = useParams();
    const [user, setUser] = useState([]);

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getUser = async () => {
            try {
                const userUrl = process.env.REACT_APP_USERS_URL + id
                // console.log(userUrl)
                const response = await axios.get(userUrl, {
                    withCredentials: true
                });

                isMounted && setUser(response.data[0]);
                console.log(response.data);

            } catch (err) {
                console.error(err);
                // navigate('/login', { state: { from: location }, replace: true });
            }
        }

        getUser();

        return () => {
            isMounted = false;
            controller.abort();
        }
    }, [])

    return (

        <div>
            <article>
                <h2>Fiche utilisateur</h2>
                <UsersListTile
                    key={user.id}
                    firstname={user.firstname}
                    lastname={user.lastname}
                    email={user.email}
                />
            </article>
        </div>
    )
}

export default User;