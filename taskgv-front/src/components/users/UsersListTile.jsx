import React from 'react'
import { NavLink } from 'react-router-dom'

function UsersListTile(user) {
  return (
      <NavLink to={`/user/${user.id}`} className='user-list-tile'>
        <p>{`${user.firstname}`}</p>
        <p>{`${user.lastname}`}</p>
        <p>{`${user.email}`}</p>
    </NavLink>
  )
}

export default UsersListTile