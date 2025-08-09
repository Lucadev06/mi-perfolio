import { Box, Button, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../app.css";

export const HeaderDesktop = () => {
    // logica de navegacion
    const navigate = useNavigate();
    const redirect = (ruta: string) => {
        navigate(ruta);
    };
    return (
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
    )
}