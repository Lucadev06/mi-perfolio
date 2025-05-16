import { Box, Button, Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import "./app.css";
import { useMediaQuery } from "@mui/material";
import { useState } from "react";

export const Header = () => {
  // Cambia el valor de isMobile según el tamaño de pantalla que desees considerar como móvil
  const isMobile = useMediaQuery("(max-width:760px)");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // logica de navegacion
  const navigate = useNavigate();
  const redirect = (ruta: string) => {
    navigate(ruta);
  };

  return (
    <>
      {isMobile ? (
        <>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              
              backgroundColor: "black",
            }}
          >
            {/* Logo alineado con el menú */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <img
                src="/logo.png"
                alt="Logo"
                style={{ width: "4.5rem", height: "auto", marginLeft: "4rem" }}
              />
            </Box>

            {/* Botón hamburguesa */}
            <IconButton onClick={() => setIsDrawerOpen(true)}>
              <MenuIcon sx={{ color: "white" }} />
            </IconButton>
          </Box>

          <Drawer
            anchor="right"
            open={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
            PaperProps={{
              sx: {
                backgroundColor: "black",
                color: "black",
                width: "40%",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "right",
                padding: "1rem",
                marginTop: "0.5rem",
              }}
            >
              <img src="/logo.png" alt="Logo" width="40%" />
              <IconButton
                sx={{
                  marginLeft: "1%",
                }}
              >
                <CloseIcon
                  sx={{ color: "white" }}
                  onClick={() => setIsDrawerOpen(false)}
                />
              </IconButton>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
                justifyContent: "left",
                marginTop: "2rem",
              }}
            >
              <Button
                variant="text"
                className="boton-menu"
                onClick={() => redirect("/app")}
              >
                Inicio
              </Button>
              <Button
                variant="text"
                className="boton-menu"
                onClick={() => redirect("/sobre-mi")}
              >
                Sobre mí
              </Button>
              <Button
                variant="text"
                className="boton-menu"
                onClick={() => redirect("/skills")}
              >
                Skills
              </Button>
              <Button
                variant="text"
                className="boton-menu"
                onClick={() => redirect("/experiencia")}
              >
                Experiencia
              </Button>
              <Button
                variant="text"
                className="boton-menu"
                onClick={() => redirect("/contacto")}
              >
                Contacto
              </Button>
            </Box>
          </Drawer>
        </>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black",
          }}
        >
          <img src="/logo.png" alt="Logo" width="5%" />

          <Box sx={{ marginLeft: "40%" }}>
            <Button
              variant="text"
              className="boton-menu"
              onClick={() => redirect("/app")}
            >
              Inicio
            </Button>
            <Button
              variant="text"
              className="boton-menu"
              onClick={() => redirect("/sobre-mi")}
            >
              Sobre mí
            </Button>
            <Button
              variant="text"
              className="boton-menu"
              onClick={() => redirect("/skills")}
            >
              Skills
            </Button>
            <Button
              variant="text"
              className="boton-menu"
              onClick={() => redirect("/experiencia")}
            >
              Experiencia
            </Button>
            <Button
              variant="text"
              className="boton-menu"
              onClick={() => redirect("/contacto")}
            >
              Contacto
            </Button>
          </Box>
        </Box>
      )}
    </>
  );
};
