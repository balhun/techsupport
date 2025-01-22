import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Stack, TextField } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import * as React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login(){
    
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
    
      const handleMouseUpPassword = (event) => {
        event.preventDefault();
      };
      
        // Gero:
        // nemtudom a faszom roviditesekt elkezdtem egz regist panelt is ahonnan majd mennek a firebasebe a cuccok
    
    return(
        <div className='text-center p-3  justify-evenly flex flex-row'>
            <div className=' rounded-lg bg-gray-800 flex flex-col p-3  m-0 w-fit'>
                <h1>Sign in</h1>
                <div className=" content-center">
                        <TextField
                            sx={{ m: 1, width: '35ch' }}
                            required
                            label="Email"
                        />
                </div>
                <div className="content-center">
                    <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
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
                        <Link to="/profile"><Button variant="contained">Login</Button></Link>
                    
            </div>
            <div className="rounded-lg bg-gray-800 flex flex-col p-3  m-0 w-fit">
                <h1>Sign up</h1>
                <div className=" content-center">
                        <TextField
                            sx={{ m: 1, width: '35ch' }}
                            required
                            label="Nev"
                        />
                </div>
                <div className=" content-center">
                        <TextField
                            sx={{ m: 1, width: '35ch' }}
                            required
                            label="Email"
                        />
                </div>
                <div className=" content-center">
                        <TextField
                            sx={{ m: 1, width: '35ch' }}
                            required
                            label="Password"
                        />
                </div>
                <Link to="/profile"><Button variant="contained">Register</Button></Link>
            </div>
        </div>
    )
}