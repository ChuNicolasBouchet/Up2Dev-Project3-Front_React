import React from 'react'

function UsersListCard(user) {
  return (
    <article className='user-card'>
        <p>{`${user.firstname}`}</p>
        <p>{`${user.lastname}`}</p>
        <p>{`${user.email}`}</p>
        
    </article>
  )
}

export default UsersListCard