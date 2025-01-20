import { Button, Stack } from '@mui/material'
import React from 'react'

export default function Menu() {

  function click() {
    console.log("Clicked on profile")
  }

  return (
    <Stack direction='row' className='bg-gray-900 text-white justify-between p-3 rounded-b-2xl z-10 shadow-xl hover:shadow-2xl transition-shadow'>
        <Stack direction='row' gap={1} >
            <Button variant='contained'>Home</Button>
            <Button variant='contained'>Your Tickets</Button>
        </Stack>
        <Stack direction='row' gap={2} alignItems='center'>
            <Stack direction='row' gap={1} onClick={click} className='p-2 rounded-md hover:bg-gray-800 hover:cursor-pointer transition-colors'>
                <span>Your name</span>
                <span>(Picture)</span>
            </Stack>
            <Button variant='contained'>Log in</Button>
        </Stack>
    </Stack>
  )
}
