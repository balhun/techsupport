import React from 'react'

export default function Profile({ user }) {
  return (
    <div className='text-white text-center'>
      { user ?
        <span>
          {user.email} {user.displayName} <br />
          <img src={user.photoURL} className='m-auto' />
        </span>
        :
        <span>Profile</span>
      }
      </div>
  )
}
