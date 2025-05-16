import { Box, Button, Typography, useMediaQuery } from "@mui/material";

export const Inicio = () => {
  const isDesktop = useMediaQuery("(min-width:960px)");

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: isDesktop ? "80%" : "100%",
        margin: "0 auto",
        backgroundColor: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        padding: "4rem 2rem",
        gap: "2rem",
        flexWrap: "wrap",
        boxSizing: "border-box",
      }}
    >
      {/* Imagen con forma original */}
      <Box
        sx={{
          width: "45%",
          aspectRatio: "5 / 6",
          backgroundColor: "#fff3db",
          clipPath:
            "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
          overflow: "hidden",
          boxShadow: "0 12px 36px rgba(0,0,0,0.15)",
          minWidth: "280px",
        }}
      >
        <img
          src="/IMG_3045.png"
          alt="Foto de Luca"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>

      {/* Texto a la derecha */}
      <Box
        sx={{
          width: "45%",
          minWidth: "280px",
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: "bold", mb: 2 }}>
          ¡Hola! Soy Luca
        </Typography>

        <Typography sx={{ color: "#444", mb: 3, fontSize: "1.2rem" }}>
          Desarrollador Frontend enfocado en crear experiencias modernas y funcionales. Me especializo en React, MUI y el diseño limpio con impacto visual.
        </Typography>

        <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" } }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#f9b234",
              color: "#fff",
              padding: "0.75rem 2rem",
              borderRadius: "2rem",
              fontWeight: "bold",
              textAlign: "center",
              "&:hover": {
                backgroundColor: "#e5a020",
              },
            }}
          >
            Contactame
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
