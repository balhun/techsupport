import React, { useState } from "react";
import { Button, Typography, Box,Link } from "@mui/material";


export default function OpenTicket({ user }) {
  const [text, setText] = useState("");
  const maxLength = 512;

  const Change = (event) => {
    if (event.target.value.length <= maxLength) {
      setText(event.target.value);
    }
  };

  return (
    <div className="flex flex-col items-center island glowing justify-center min-h-screen bg-gradient-to-b from-purple-900 to-blue-600 p-4">
      <Box className="bg-white shadow-lg rounded-2xl p-6 space-y-6 w-full max-w-lg">
        <Typography variant="h5" align="center" className="text-gray-800 font-semibold">Open a Support Ticket</Typography>
        {user ? (null):
          <Typography variant="body2" align="center" className="text-gray-600">Létrehozhat új jegyet, ha be van <Link className="text-blue-700 underline" href="/login">jelentkezve</Link>.</Typography>
        }
        {user ? (
          <>
            <Box>
              <textarea  value={text} onChange={Change} rows="11" className="w-full border resize-none border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Problémád ide írd..."></textarea>
              <Typography variant="body2" align="right" className="text-gray-500 mt-1">Betűszám: {text.length}/{maxLength} </Typography>
            </Box>
            <Box display="flex" justifyContent="center">
              <Button variant="contained" color="primary" size="large"  className="w-full md:w-auto px-6" disabled={text.length === 0}>Küldés</Button>
            </Box>
          </>
        ) : null}
      </Box>
    </div>
  );
}
