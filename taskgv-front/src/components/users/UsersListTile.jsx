import React, {useContext} from 'react'
import {NavLink} from 'react-router-dom';
import AuthContext from "../../context/AuthProvider";
import UserController from "./UserController";

function UsersListTile(user) {
    const { auth } = useContext(AuthContext);
    //console.log(auth.userAuthorities.isAdmin[0])
    // console.log(user.id)

    return (
      <div className='user-list-tile'>
        <p>{`${user.firstname}`}</p>
        <p>{`${user.lastname}`}</p>
        <p>{`${user.email}`}</p>
        <div className='user-edit-btn__wrapper'>
            { auth.userInfos.userId[0] === user.id || auth.userAuthorities.isAdmin[0] ? <NavLink to={`/useredit/${user.id}`}><button className='user-edit-btn'>Modifier</button> </NavLink> : null }
        </div>
        <div className='user-delete-btn__wrapper'>
              { auth.userInfos.userId[0] === user.id || auth.userAuthorities.isAdmin[0] ? <button className='user-delete-btn' onClick={() => UserController.deleteUser(user.id)}>Supprimer</button>: null }
        </div>
      </div>
    )
}

export default UsersListTile