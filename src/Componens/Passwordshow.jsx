import { VisibilityOff } from '@mui/icons-material';
import { Visibility } from '@mui/icons-material';
import { FilledInput, FormControl, IconButton, Input, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import React from 'react'
import { useState } from 'react';

export default function Passwordshow({value,onChange,label,testId}) {

  const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
    
      const handleMouseUpPassword = (event) => {
        event.preventDefault();
      };
  return (
    <div className="content-center ">
        <FormControl className='w-80 align-middle' required variant="filled">
          <InputLabel>{label}</InputLabel>
              <FilledInput
                value={value}
                onChange={onChange}
                data-testid={testId}
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end" >
                    <IconButton
                      aria-label={showPassword ? 'hide the password' : 'display the password'}
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}
                      edge="end"                  
                      >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                  }
                  label="Password"
              />
          </FormControl>
      </div>
  )
}

