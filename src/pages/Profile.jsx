import React from 'react'

export default function Profile({ user }) {
  console.log(user);
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
      <div className="bg-white">
          
      </div>
      <div className="bg-white">

      </div>
      </div>
  )
}
