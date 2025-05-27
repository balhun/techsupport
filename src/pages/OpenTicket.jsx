import { useState } from "react";
import { Button, Typography, Box, Link } from "@mui/material";
import axios from "axios";
import { BACKEND_URL } from "../constants/backEnd";
import { useNavigate } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function OpenTicket({ user }) {
  const [text, setText] = useState("");
  const [cim, setCim] = useState("");
  const [success, setSuccess] = useState(false);
  const maxLength = 512;

  const navigate = useNavigate();

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
    <div className="flex flex-col items-center justify-center p-4 my-8">
      <Box
        sx={{
          background: "linear-gradient(145deg, #ffffff, #f8f9fa)",
          borderRadius: 4,
          boxShadow: 3,
          p: 4,
          width: "100%",
          maxWidth: "800px",
          position: "relative",
          "&:before": {
            content: '""',
            position: "absolute",
            top: -2,
            left: -2,
            right: -2,
            bottom: -2,
            background: "linear-gradient(45deg, #4facfe 0%, #00f2fe 100%)",
            borderRadius: 5,
            zIndex: -1,
            animation: "gradient 3s ease infinite",
          },
          "@keyframes gradient": {
            "0%": { opacity: 0.3 },
            "50%": { opacity: 0.6 },
            "100%": { opacity: 0.3 },
          },
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{
            mb: 4,
            fontWeight: "bold",
            textAlign: "center",
            color: "primary.main",
            textTransform: "uppercase",
            letterSpacing: 1.2,
          }}
        >
          Írj nekünk egy hibajegyet!
        </Typography>

        {!user && (
          <Box textAlign="center" sx={{ mb: 4 }}>
            <Typography variant="body1" sx={{ color: "text.secondary", mb: 1 }}>
              A jegynyitáshoz be kell jelentkeznie
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate("/login")}
              sx={{
                borderRadius: 2,
                px: 4,
                py: 1,
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
            >
              Bejelentkezés
            </Button>
          </Box>
        )}

        {user && (
          <>
            <Box sx={{ mb: 3 }}>
              <input
                value={cim}
                onChange={(e) => setCim(e.target.value)}
                placeholder="Téma"
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg font-medium"
              />
            </Box>

            <Box sx={{ position: "relative", mb: 2 }}>
              <textarea
                value={text}
                onChange={Change}
                rows={8}
                placeholder="Írja le részletesen a problémát..."
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
              <Typography
                variant="caption"
                sx={{
                  position: "absolute",
                  right: 10,
                  bottom: 10,
                  color:
                    text.length === maxLength ? "error.main" : "text.secondary",
                  backgroundColor: "background.paper",
                  px: 1,
                  borderRadius: 1,
                }}
              >
                {text.length}/{maxLength}
              </Typography>
            </Box>

            {success && (
              <Box
                sx={{
                  backgroundColor: "success.light",
                  color: "success.dark",
                  p: 2,
                  borderRadius: 2,
                  mb: 3,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <CheckCircleIcon sx={{ fontSize: 20 }} />
                <Typography variant="body2">
                  Üzenet sikeresen elküldve!
                </Typography>
              </Box>
            )}

            <Button
              fullWidth
              variant="contained"
              onClick={adduzenet}
              disabled={!text.trim() || !cim.trim()}
              sx={{
                py: 2,
                borderRadius: 2,
                fontWeight: "bold",
                textTransform: "uppercase",
                letterSpacing: 1.1,
                transition: "all 0.3s ease",
                "&:disabled": {
                  opacity: 0.7,
                  bgcolor: "grey.300",
                },
                "&:hover": {
                  transform: "translateY(-1px)",
                },
              }}
            >
              Küldés
            </Button>
          </>
        )}
      </Box>
    </div>
  );
}
