import React from 'react'
import { Button, ButtonGroup, Stack } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'

export default function Menu({ user, logout }) {
  const { pathname } = useLocation();

  return (
    <Stack direction='row' className='flex flex-row  md:flex-col bg-gray-900 text-white justify-between p-2 rounded-b-xl z-10 shadow-xl hover:shadow-2xl transition-shadow bg-opacity-75'>
        <Stack direction='row' gap={1} >
          <ButtonGroup variant='outlined'>
            <Link to="/"><Button variant={pathname == "/" ? "outlined" : "contained"}>Home</Button></Link>
            <Link to="/openticket"><Button variant={pathname == "/openticket" ? "outlined" : "contained"}>Open a Ticket</Button></Link>
          </ButtonGroup>
        </Stack>
        <h1 className='text-3xl'>Welcome to Technical Support™</h1>
        <Stack direction='row' gap={2} alignItems='center'>
          { user ? 
            <Link to="/profile"><Stack direction='row' gap={1} className="p-2 rounded-md hover:bg-gray-800 hover:cursor-pointer transition-colors" >
                <span className='flex items-center'>{user.displayName}</span>
                <img src={user.photoURL} className='w-8 h-8' />
            </Stack></Link>
            :
            ""
          }
          { user ?
            <Link to="/"><Button variant="outlined" onClick={logout}>Log out</Button></Link>
            :
            <Link to="/login"><Button variant={pathname == "/login" ? "outlined" : "contained"}>Log in</Button></Link>
          }
            
        </Stack>
    </Stack>
  )
}
