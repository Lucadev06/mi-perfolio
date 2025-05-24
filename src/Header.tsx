import { Box, Button, Drawer, IconButton, Tooltip } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import "./app.css";
import { useMediaQuery } from "@mui/material";
import { useState } from "react";

export const Header = () => {
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
              padding: "0",
              marginBottom: "-10px",
              boxSizing: "border-box",
              backgroundColor: "black",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Tooltip title="Luca Simonazzi">
                <img
                  src="/logo.png"
                  alt="Logo"
                  style={{
                    width: "4.5rem",
                    height: "auto",
                    marginLeft: "4rem",
                  }}
                />
              </Tooltip>
            </Box>

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
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "black",
            boxSizing: "border-box",
            padding: "0 4rem",
            height: "3rem",
          }}
        >
          <Tooltip title="Luca Simonazzi">
            <img
              src="/logo.png"
              alt="Logo"
              style={{ height: "3.5rem", cursor: "pointer" }}
            />
          </Tooltip>

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
