import React, {useContext} from 'react'
// import {NavLink} from 'react-router-dom';
// import AuthContext from "../../context/AuthProvider";
// import ProjectController from "./ProjectController";
// import DeleteButton from "../buttons/DeleteButton";
// import EditButton from "../buttons/EditButton";

function ProjectsListTile__BACKUP(user) {
    // const { auth } = useContext(AuthContext);

    return (
      <div className='project-list-tile'>
        <p>{`${project.project_title}`}</p>
        <p>{`${project.project_description}`}</p>
        {/*<div className='project-list__btn__wrapper'>*/}
        {/*    /!*{ auth.userInfos.userId[0] === user.id || auth.userAuthorities.isAdmin[0] ? <NavLink to={`/useredit/${user.id}`}><button className='user-edit-btn'>Modifier<EditIco classname='user-edit-btn__edit-ico' /></button> </NavLink> : null }*!/*/}
        {/*    { auth.userInfos.userId[0] === user.id || auth.userAuthorities.isAdmin[0] ? <NavLink to={`/useredit/${user.id}`}><EditButton /></NavLink> : null }*/}

        {/*    {auth.userInfos.userId[0] === user.id || auth.userAuthorities.isAdmin[0] ? <DeleteButton className='delete-button' onClick={() => ProjectController.deleteUser(user.id)}></DeleteButton> : null }*/}
        {/*</div>*/}
      </div>
    )
}

export default ProjectsListTile__BACKUP