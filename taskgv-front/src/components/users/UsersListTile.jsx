import React, {useContext} from 'react'
import {NavLink} from 'react-router-dom';
import AuthContext from "../../context/AuthProvider";
import UserController from "./UserController";
import DeleteButton from "../buttons/DeleteButton";
import EditButton from "../buttons/EditButton";

function UsersListTile(user) {
    const { auth } = useContext(AuthContext);
    //console.log(auth.userAuthorities.isAdmin[0])
    // console.log(user.id)

    return (
      <div className='user-list-tile'>
        <p>{`${user.firstname}`}</p>
        <p>{`${user.lastname}`}</p>
        <p>{`${user.email}`}</p>
        <div className='user-list__btn__wrapper'>
            {/*{ auth.userInfos.userId[0] === user.id || auth.userAuthorities.isAdmin[0] ? <NavLink to={`/useredit/${user.id}`}><button className='user-edit-btn'>Modifier<EditIco classname='user-edit-btn__edit-ico' /></button> </NavLink> : null }*/}
            { auth.userInfos.userId[0] === user.id || auth.userAuthorities.isAdmin[0] ? <NavLink to={`/useredit/${user.id}`}><EditButton /></NavLink> : null }

            {auth.userInfos.userId[0] === user.id || auth.userAuthorities.isAdmin[0] ? <DeleteButton className='delete-button' onClick={() => UserController.deleteUser(user.id)}></DeleteButton> : null }
        </div>
      </div>
    )
}

export default UsersListTile