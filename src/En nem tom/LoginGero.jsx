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
        <div className='text-center p-3  justify-evenly flex flex-col md:items-start items-center  md:flex-row'>
            <div className=' rounded-lg bg-gray-800 flex flex-col p-3  m-0 w-fit hover:shadow-2xl hover:shadow-slate-700'>
                <h1>Sign in</h1>
                <div className=" content-center ">
                        <TextField
                            required
                            label="Email"
                        />
                </div>
                <div className="content-center ">
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end" >
                                    <IconButton
                                        sx={{ color: 'white' }}
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
                        <Link className="w-fit m-auto" to="/profile"><Button variant="contained">Login</Button></Link>
                    
            </div>
            <div className="rounded-lg bg-gray-800 hover:bg-slate-700 flex flex-col p-3  m-0 w-fit hover:shadow-2xl hover:shadow-slate-700">
                <h1>Sign up</h1>
                <div className=" content-center">
                        <TextField
                            required
                            label="Nev"
                        />
                </div>
                <div className=" content-center">
                        <TextField
                            required
                            label="Email"
                        />
                </div>
                <div className=" content-center">
                        <TextField
                            required
                            label="Password"
                        />
                </div>
                <Link className="w-fit m-auto" to="/profile"><Button variant="contained">Register</Button></Link>
            </div>
        </div>
    )
}