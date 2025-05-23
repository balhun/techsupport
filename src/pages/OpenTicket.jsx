import { useState } from "react";
import { Button, Typography, Box, Link } from "@mui/material";
import axios from "axios";
import { BACKEND_URL } from "../constants/backEnd";
import { useNavigate } from "react-router-dom";

export default function OpenTicket({ user }) {
  const [text, setText] = useState("");
  const [cim, setCim] = useState("");
  const [success, setSuccess] = useState(false);
  const maxLength = 512;

  const navigate=useNavigate();

  const Change = (event) => {
    if (event.target.value.length <= maxLength) {
      setText(event.target.value);
    }
  };

  async function adduzenet() {
    await axios.post(
      `${BACKEND_URL}/uzenetek`,
      { uzenet: text, cim: cim },
      { headers: { "x-user-id": user.uid } }
    );
    setText("");
    setCim("");
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  }

  return (
    <div className="flex flex-col items-center justify-center p-4 my-50 middle">
      <Box className="bg-white glowing shadow-lg rounded-2xl p-6 space-y-6 w-full max-w-lg md:max-w-2xl lg:max-w-4xl island glowing">
        <Typography
          variant="h5"
          align="center"
          className="text-gray-800 font-semibold"
        >
          Hibajegy megnyitása
        </Typography>
        {user ? null : (
          <Typography variant="body2" align="center" className="text-gray-600">
            Létrehozhat új jegyet, ha be van{" "}
            <Link className="text-blue-700 underline cursor-pointer"  to="/login"
            onClick={(e) => {
              e.preventDefault();
              navigate("/login");
            }}>
              jelentkezve
            </Link>
            .
          </Typography>
        )}
        {user ? (
          <>
            <Box>
              <textarea
                value={cim}
                onChange={(e) => setCim(e.target.value)}
                rows="1"
                className="w-full mt-4 border resize-none border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Téma"
              ></textarea>
              <textarea
                value={text}
                onChange={Change}
                rows="11"
                className="w-full mt-4 border resize-none border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Problémád ide írd..."
              ></textarea>
              <Typography
                variant="body2"
                align="right"
                className="text-gray-500 mt-1"
              >
                Betűszám: {text.length}/{maxLength}{" "}
              </Typography>
            </Box>
            {success && (
              <Box
                className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-4"
                role="alert"
              >
                <strong className="font-bold">Siker!</strong>
                <span className="block sm:inline"> Üzenet elküldve!</span>
              </Box>
            )}
            <Box display="flex" justifyContent="center">
              <Button
                variant="contained"
                onClick={adduzenet}
                color="primary"
                size="large"
                className="w-full md:w-auto px-6 mt-4"
                disabled={text.length === 0 || cim.length === 0}
              >
                Küldés
              </Button>
            </Box>
          </>
        ) : null}
      </Box>
    </div>
  );
}
