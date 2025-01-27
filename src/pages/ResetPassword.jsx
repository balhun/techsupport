import React, { useState } from "react";
import { Button, TextField, Stack } from "@mui/material";
import { sendPasswordResetEmail } from "firebase/auth";


export default function ResetPassword({auth}) {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handlePasswordReset = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      setSuccessMessage(
        "Password reset email sent! Check your inbox or spam folder."
      );
      setErrorMessage("");
    } catch (error) {
      setErrorMessage(error.message);
      setSuccessMessage("");
    }
  };

  return (
    <Stack spacing={2} className="p-4 w-full max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-center">Forgot Password</h1>
      <TextField
        label="Email Address"
        type="email"
        variant="outlined"
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      {successMessage && <p className="text-green-500">{successMessage}</p>}
      <Button
        variant="contained"
        color="primary"
        onClick={handlePasswordReset}
        disabled={!email}
      >
        Send Reset Email
      </Button>
    </Stack>
  );
}