import { Button, Stack } from '@mui/material'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Menu() {
  const { pathname } = useLocation();
  function click() {
    console.log("Clicked on profile")
  }

  return (
    <Stack direction='row' className='bg-gray-900 text-white justify-between p-3 rounded-b-2xl z-10 shadow-xl hover:shadow-2xl transition-shadow'>
        <Stack direction='row' gap={1} >
            <Link><Button variant={pathname == "/" ? "contained" : "contained"}>Home</Button></Link>
            <Link><Button variant={pathname == "/ticket" ? "contained" : "contained"}>Tickets</Button></Link>
        </Stack>
        <Stack direction='row' gap={2} alignItems='center'>
            <Stack direction='row' gap={1} onClick={click} className='p-2 rounded-md hover:bg-gray-800 hover:cursor-pointer transition-colors'>
                <span>Your name</span>
                <span>(Picture)</span>
            </Stack>
            <Link to="/login"><Button variant={pathname == "/login" ? "contained" : "contained"}>Log in</Button></Link>
        </Stack>
    </Stack>
  )
}
