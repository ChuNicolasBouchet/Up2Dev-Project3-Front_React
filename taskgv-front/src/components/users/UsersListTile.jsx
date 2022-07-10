import React from 'react'

function UsersListTile(user) {
  return (
    <article className='user-list-tile'>
        <p>{`${user.firstname}`}</p>
        <p>{`${user.lastname}`}</p>
        <p>{`${user.email}`}</p>
        
    </article>
  )
}

export default UsersListTile