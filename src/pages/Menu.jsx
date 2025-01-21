import { Button, ButtonGroup, Stack } from '@mui/material'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Menu() {
  const { pathname } = useLocation();

  /*Ezen még dolgozok, még nem tetszik teljesen */

  return (
    <Stack direction='row' className='bg-gray-900 text-white justify-between p-2 rounded-b-2xl z-10 shadow-xl hover:shadow-2xl transition-shadow'>
        <Stack direction='row' gap={1} >
          <ButtonGroup variant='outlined'>
            <Link to="/"><Button variant={pathname == "/" ? "outlined" : "contained"}>Home</Button></Link>
            <Link to="/openticket"><Button variant={pathname == "/openticket" ? "outlined" : "contained"}>Open a Ticket</Button></Link>
          </ButtonGroup>
        </Stack>
        <h1 className='text-3xl'>Welcome to Technical Support™</h1>
        <Stack direction='row' gap={2} alignItems='center'>
            <Link to="/profile"><Stack direction='row' gap={1} className="p-2 rounded-md hover:bg-gray-800 hover:cursor-pointer transition-colors" >
                <span>Your name</span>
                <span>(Picture)</span>
            </Stack></Link>
            <Link to="/login"><Button sx={{color: "lightblue"}}  variant={pathname == "/login" ? "outlined" : "contained"}>Log in</Button></Link>
        </Stack>
    </Stack>
  )
}
