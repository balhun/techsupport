import { Stack, TextField, Button, Link, Alert } from '@mui/material'
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import {signInWithEmailAndPassword, signInWithPopup, createUserWithEmailAndPassword, updateProfile} from "firebase/auth"
import { GoogleAuthProvider } from "firebase/auth";

export default function Login({ auth, user }) {

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [loginError, setLoginError] = useState(false);

  const [felhasznalonev, setFelhasznalonev] = useState('')
  const [newEmail, setNewEmail] = useState('')
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  async function login() {
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      setLoginError(false);
      setEmail(""); setPassword("");
      
    } catch (error) {
      if (error.code == "auth/invalid-email") {
        setLoginError(true);
      }
    }
  }

  async function regist() {
    if (newPassword !== confirmPassword) {
      setError(true);
      setErrorMessage("Nem egyezik a két jelszó!");
      return;
    } else {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, newEmail, newPassword)
        const user = userCredential.user;
        await updateProfile(user, {
          displayName: felhasznalonev,
          photoURL: "./blank-pfp.png"
        });
      } catch (err) {
        if (felhasznalonev.length < 6) {
          setError(true);
          setErrorMessage("A nevednek legalább 6 karakterből kell állnia!");
        } else if (err.code == "auth/invalid-email") {
          setError(true);
          setErrorMessage("Helytelen Email cím!");
        } else if (err.code == "auth/weak-password") {
          setError(true);
          setErrorMessage("Jelszó legalább 6 karakterből álljon!");
        } else if (err.code == "auth/email-already-in-use") {
          setError(true);
          setErrorMessage("Az Email cím már használt!");
        }
      }
    }
  };

  async function GoogleLogIn() {
    await signInWithPopup(auth, new GoogleAuthProvider());
    navigate("/profile", {replace:true});
  }
  
  return (
    <>
      {!user ?
        <div className='justify-evenly md:mt-20 mt-2 flex flex-col md:flex-row gap-2 md:items-start items-center'>
          <Stack gap={2} className='island glowing w-fit h-fit flex justify-center items-center p-5 shadow-black'>
            <h1 className='text-center text-2xl'>Jelentkezz be itt!</h1>
            <TextField
              className='w-80 align-middle'
              required
              label="Email"
              variant='filled'
              value={loginEmail}
              onChange={e=> { setLoginEmail(e.target.value); setLoginError(false)}}
            />
            <TextField
              type='password'
              className='w-80 align-middle'
              required
              label="Jelszó"
              variant='filled'
              value={loginPassword}
              onChange={e => { setLoginPassword(e.target.value); setLoginError(false); }}
            />
            <Link href="/forgotpassword" sx={{textDecoration: "none", color: "#4b5563"}}>Elfelejtett jelszó</Link>
            {loginError ? <Alert severity="error" variant='filled' sx={{width: "320px"}}>Hibás felhasználónév vagy jelszó</Alert> : ""}
            <Link to="/profile"><Button onClick={login} variant='contained' className='w-80'>Bejelentkezés</Button></Link>
            <p className="">--Or continue with--</p>
            <Link to="/profile" sx={{width:"320px"}}><img src="./google.png" className='flex m-auto cursor-pointer w-4/5' onClick={GoogleLogIn} alt="" /></Link>
          </Stack>
          <Stack gap={2} className='glowing island w-fit h-fit flex flex-col md:flex-row justify-center items-center p-5 mt-8 md:mt-0'>
              <h1 className='text-center text-2xl'>Regisztrálj itt!</h1>
              <TextField
                className='w-80 align-middle'
                required
                label="Felhasználónév"
                variant='filled'
                value={felhasznalonev}
                onChange={e => { setFelhasznalonev(e.target.value); setError(false);}} 
              />
              <TextField
                className='w-80 align-middle'
                required
                label="Email"
                variant='filled'
                value={newEmail}
                onChange={e => {setNewEmail(e.target.value); setError(false);}} 
              />
              <TextField
                className='w-80 align-middle'
                required
                label="Jelszó"
                variant='filled'
                type='password'
                value={newPassword}
                onChange={e => {setNewPassword(e.target.value); setError(false);}}
              />
              <TextField
                className='w-80 align-middle'
                required
                type='password'
                label="Jelszó megerősítés"
                value={confirmPassword}
                onChange={e => {setConfirmPassword(e.target.value); setError(false);}}
                variant='filled'
              />
              {error ? <Alert severity="error" variant='filled' sx={{width: "320px"}}>{errorMessage}</Alert> : "" }
              <Button  variant='contained' className='w-80' onClick={regist}>Regisztrálás</Button>
          </Stack>
      </div>
      :
        <Navigate to='/profile' replace />
      }
    </>
  )
}