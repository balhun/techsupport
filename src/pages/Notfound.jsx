import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { SentimentDissatisfied } from "@mui/icons-material"; // Importing a sad face icon from Material UI

export default function NotFound() {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "island",
        textAlign: "center",
        padding: 2,
      }}
    >
      <SentimentDissatisfied
        sx={{
          fontSize: 100,
          color: "#ff5733",
          marginBottom: 3,
        }}
      />
      <Typography variant="h3" gutterBottom>
        Hups! Az oldal nem található
      </Typography>
      <Typography variant="h5" color="textSecondary" paragraph>
        Az általad keresett oldal nem létezik vagy el lett mozdítva.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={goHome}
        sx={{
          marginTop: 3,
          backgroundColor: "#3f51b5",
          ":hover": {
            backgroundColor: "#303f9f",
          },
        }}
      >
        Vissza a kezdőlapra
      </Button>
    </Box>
  );
}
