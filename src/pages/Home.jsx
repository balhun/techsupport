import { Button, Typography, useTheme } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SpeedIcon from "@mui/icons-material/Speed";
import { styled } from "@mui/system";

const GradientCard = styled("div")(({ theme }) => ({
  background: `linear-gradient(145deg, ${
    theme.palette?.background?.paper || "#ffffff"
  } 0%, #fdf6e3 100%)`,
  borderRadius: "20px",
  padding: "2rem",
  boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
  },
}));

const FeatureItem = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  padding: "1rem",
  background: "rgba(255,255,255,0.9)",
  borderRadius: "12px",
  margin: "1rem 0",
});

export default function Home() {
  const theme = useTheme();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-2 gap-8 mb-16">
        <GradientCard className="flex flex-col justify-between">
          <div>
            <Typography
              variant="h2"
              component="h1"
              className="mb-6 gradient-text"
            >
              Technikai támogatás,
              <br />
              <span className="text-orange-500">amit érdemelsz</span>
            </Typography>

            <Typography variant="h5" className="mb-8 text-gray-600">
              Profi segítség egy kattintásnyira. Legyen bármi a gond,
              <br />
              mi gyorsan és hatékonyan megoldjuk.
            </Typography>

            <Button
              component={Link}
              to="/openticket"
              variant="contained"
              size="large"
              sx={{
                background: `linear-gradient(45deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                fontSize: "1.1rem",
                padding: "12px 32px",
                borderRadius: "50px",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 8px 24px rgba(255,87,34,0.3)",
                },
              }}
            >
              Segítségkérés most
            </Button>
          </div>

          <div className="mt-8 flex gap-4 text-gray-600">
            <FeatureItem>
              <SpeedIcon fontSize="large" color="primary" />
              <div>
                <h3 className="text-xl font-bold">Gyors válaszidő</h3>
                <p>Átlag 15 percen belül</p>
              </div>
            </FeatureItem>
          </div>
        </GradientCard>

        <div className="space-y-6">
          <div className="p-6 bg-white rounded-2xl shadow-lg">
            <Typography variant="h4" className="mb-4 font-bold">
              Miért válasszon minket?
            </Typography>

            <div className="space-y-4">
              <FeatureItem>
                <CheckCircleIcon color="success" fontSize="large" />
                <div>
                  <h4 className="text-lg font-semibold">
                    Garantált megoldások
                  </h4>
                  <p className="text-gray-600">
                    Szakértőinkkel 99.9%-os megoldási arány
                  </p>
                </div>
              </FeatureItem>

              <FeatureItem>
                <SupportAgentIcon color="primary" fontSize="large" />
                <div>
                  <h4 className="text-lg font-semibold">24/7 Elérhetőség</h4>
                  <p className="text-gray-600">
                    Non-stop támogatás, amikor csak szükséged van rá
                  </p>
                </div>
              </FeatureItem>
            </div>
          </div>
          <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-lg">
            <Typography variant="h5" className="mb-4 font-bold">
              Személyre szabott segítség
            </Typography>
            <Typography className="mb-4 text-gray-600">
              Írjon nekünk közvetlenül, és egy dedikált szakértő fogja kezelni
              az ügyét.
            </Typography>
            <Button
              component={Link}
              to="/openticket"
              variant="outlined"
              size="large"
              startIcon={<SupportAgentIcon />}
              sx={{
                borderWidth: "2px",
                borderRadius: "12px",
                "&:hover": {
                  borderWidth: "2px",
                  background: "rgba(255,255,255,0.9)",
                },
              }}
            >
              Ügyintézés indítása
            </Button>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-8 mt-16">
        <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
          <SpeedIcon fontSize="large" color="primary" />
          <h3 className="text-xl font-bold my-4">Azonnali válaszok</h3>
          <p className="text-gray-600">
            Intelligens kollégáink azonnali válaszokkal szolgál gyakori
            kérdésekre
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
          <SupportAgentIcon fontSize="large" color="primary" />
          <h3 className="text-xl font-bold my-4">Szakértői segítség</h3>
          <p className="text-gray-600">
            Hitelesített szakembereinkkel minden probléma megoldható
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
          <CheckCircleIcon fontSize="large" color="primary" />
          <h3 className="text-xl font-bold my-4">Minőségbiztosítás</h3>
          <p className="text-gray-600">
            Minden megoldásunkat kettős ellenőrzéssel látjuk el
          </p>
        </div>
      </div>
    </div>
  );
}
