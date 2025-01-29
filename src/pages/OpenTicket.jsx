import { Button, TextField } from '@mui/material'
import React from 'react'

export default function OpenTicket() {
  return (
    <div className='glowing island'>
      <div className='text-white text-center'>OpenTicket (Megnézi be vagy e jelentkezve és ha igen akkor új ticketet írhatsz, egyébként átirányit a loginra)</div>
      <div>
          <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={8}
          defaultValue="Default Value"
          />
          <Button>Kuldes</Button>
        </div>
    </div>
  )
}
