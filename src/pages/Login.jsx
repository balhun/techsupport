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
        <div className='text-center'>Login Page
            <div className=' w-9/12 bg-white flex flex-col  m-0 m-auto '>
                <div className=" content-center">
                        <TextField
                        sx={{ m: 1, width: '25ch' }}
                        required
                        label="Email"
                        />
                </div>
                <div className="content-center">
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label={
                                    showPassword ? 'hide the password' : 'display the password'
                                }
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
                        <p className="text-black">Nem vagy regisztralva?</p>
                        <Link to='/regist'>Kattints ide</Link>
                        
                    
            </div>
        </div>
    )
}