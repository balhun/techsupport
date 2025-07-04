import { TextField, Button, Link, Alert, Divider } from "@mui/material";
import { useState } from "react";
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
}) {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [loginError, setLoginError] = useState(false);

  const [felhasznalonev, setFelhasznalonev] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
            className="island glowing w-fit h-fit flex flex-col justify-center items-center p-5 shadow-black"
          >
            <h1 className="text-center text-2xl mb-4">Jelentkezz be!</h1>
            <TextField
              className="w-80 align-middle"
              sx={{marginBottom: 2}}
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
              autoComplete="current-password"
            />

            {loginError ? (
              <Alert severity="error" variant="filled" sx={{ width: "320px" }}>
                Hibás Email vagy jelszó
              </Alert>
            ) : (
              ""
            )}

            <Link
              href="/forgotpassword"
              sx={{
                marginBottom: 2,
                width: "100%",
                color: "text.secondary",
                textDecoration: "None",
                "&:hover": { color: "primary.main", textDecoration: "None" },
              }}
            >
              Elfelejtetted a jelszavad?
            </Link>
            <Link to="/profile" sx={{marginBottom: 2}} >
              <Button onClick={login} variant="contained" className="w-80">
                Bejelentkezés
              </Button>
            </Link>
            <Divider sx={{width: "100%", marginBottom: 1}}><span className="text-gray-500">Vagy jelentkezz be így</span></Divider>
            <Button
              startIcon={<Google />}
              variant="outlined"
              onClick={GoogleLogIn}
              className="w-80"
              sx={{
                backgroundColor: "primary.main",
                boxShadow: 1,
                color: "white",
                "&:hover": {
                  backgroundColor: "primary.dark",
                  boxShadow: 3
                },
              }}
            >
              Google
            </Button>

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
              autoComplete="new-password"
            />
            <Passwordshow
              value={confirmPassword}
              testId="password-input-2"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setError(false);
              }}
              label="Jelszó megerősítés"
              autoComplete="new-password"
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
