import { useState } from "react";
import { Button, TextField, Stack } from "@mui/material";
import { sendPasswordResetEmail } from "firebase/auth";


export default function ResetPassword({auth}) {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const PasswordReset = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      setSuccessMessage(
        "Jelszó-visszaállítási e-mail elküldve! \r\n Ellenőrizze a beérkező leveleket vagy a spam mappát."
      );
      setErrorMessage("");
    } catch (error) {
      setErrorMessage(error.message);
      setSuccessMessage("");
    }
  };

  return (
    <Stack spacing={2} className="p-4 w-full max-w-md mx-auto glowing island mt-5">
      <h1 className="text-2xl font-bold text-center text-gray-800">Elfelejtett Jelszó</h1>
      <TextField
        label="Email cím"
        type="email"
        variant="outlined"
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      {successMessage && <p className="text-green-500">{successMessage}</p>}
      <Button variant="contained" color="primary" onClick={PasswordReset} disabled={!email}>Visszaállítási e-mail küldése</Button>
    </Stack>
  );
}