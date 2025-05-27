import { Stack, TextField, Button, Link, Alert } from "@mui/material";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import Passwordshow from "../Componens/Passwordshow";
import { Google } from "@mui/icons-material";

export default function Login({
  auth,
  user,
  logout,
  //successRegist,
  //setSuccessRegist,
}) {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [loginError, setLoginError] = useState(false);

  const [felhasznalonev, setFelhasznalonev] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  async function login() {
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      setLoginError(false);
      setEmail("");
      setPassword("");
    } catch (error) {
      if (error.code == "auth/invalid-email") {
        setLoginError(true);
      } else if (error.code == "auth/invalid-credential") {
        setLoginError(true);
      }
    }
  }

  async function regist() {
    if (newPassword !== confirmPassword) {
      setError(true);
      setErrorMessage("Nem egyezik a két jelszó!");
    } else {
      try {
        //setSuccessRegist(false);
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          newEmail,
          newPassword
        ).then(async (res) => {
          const user = userCredential.user;
          await updateProfile(user, {
            displayName: felhasznalonev,
            photoURL: "./blank-pfp.png",
          });
          //setSuccessRegist(true);
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
  }

  async function GoogleLogIn() {
    await signInWithPopup(auth, new GoogleAuthProvider());
    navigate("/profile", { replace: true });
  }

  return (
    <>
      {!user ? (
        <div className="justify-evenly mt-2 flex flex-col md:flex-row gap-2 md:items-start items-center">
          <form
            className="island glowing w-fit h-fit flex flex-col gap-4 justify-center items-center p-5 shadow-black"
          >
            <h1 className="text-center text-2xl">Jelentkezz be itt!</h1>
            <TextField
              className="w-80 align-middle"
              required
              data-testid="email-input"
              label="Email"
              variant="filled"
              value={loginEmail}
              onChange={(e) => {
                setLoginEmail(e.target.value);
                setLoginError(false);
              }}
            />
            <Passwordshow
              value={loginPassword}
              testId="password-input-1"
              onChange={(e) => {
                setLoginPassword(e.target.value);
                setLoginError(false);
              }}
              label="Jelszó"
            />

            {loginError ? (
              <Alert severity="error" variant="filled" sx={{ width: "320px" }}>
                Hibás Email vagy jelszó
              </Alert>
            ) : (
              ""
            )}
            <Link to="/profile">
              <Button onClick={login} variant="contained" className="w-80">
                Bejelentkezés
              </Button>
            </Link>
            <p className="text-gray-500">Vagy jelentkez be így</p>
            <Button
              startIcon={<Google />}
              variant="outlined"
              onClick={GoogleLogIn}
              sx={{
                borderColor: "text.secondary",
                color: "text.primary",
                "&:hover": {
                  borderColor: "primary.main",
                  color: "primary.main",
                },
              }}
            >
              Continue with Google
            </Button>

            <Link
              href="/forgotpassword"
              sx={{
                textAlign: "center",
                color: "text.secondary",
                "&:hover": { color: "primary.main" },
              }}
            >
              Forgot Password?
            </Link>
          </form>
          <form
            className="glowing island w-fit h-fit flex flex-col justify-center items-center p-5 gap-4"
          >
            <h1 className="text-center text-2xl">Regisztrálj itt!</h1>
            <TextField
              className="w-80 align-middle"
              required
              label="Felhasználónév"
              variant="filled"
              value={felhasznalonev}
              onChange={(e) => {
                setFelhasznalonev(e.target.value);
                setError(false);
              }}
            />
            <TextField
              className="w-80 align-middle"
              required
              label="Email"
              variant="filled"
              value={newEmail}
              onChange={(e) => {
                setNewEmail(e.target.value);
                setError(false);
              }}
            />
            <Passwordshow
              value={newPassword}
              testId="password-input-2"
              onChange={(e) => {
                setNewPassword(e.target.value);
                setError(false);
              }}
              label="Jelszó"
            />
            <Passwordshow
              value={confirmPassword}
              testId="password-input-2"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setError(false);
              }}
              label="Jelszó megerősítés"
            />
            <Button variant="contained" className="w-80" onClick={regist}>
              Regisztrálás
            </Button>
          </form>
        </div>
      ) : (
        <Navigate to="/profile" replace />
      )}
    </>
  );
}
