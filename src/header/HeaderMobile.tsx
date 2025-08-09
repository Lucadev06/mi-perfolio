import { Box, Button, Drawer, IconButton, Tooltip } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import "../app.css";
import { useMediaQuery } from "@mui/material";
import { useState } from "react";
export const HeaderMobile = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    // Logica de margen para el menú y el icono
    const isLargeMenu = useMediaQuery('(max-width: 999px) and (min-width: 850px)');
    const isSmallMenu = useMediaQuery('(max-width: 849px) and (min-width: 700px)');
    const isExtraSmallMenu = useMediaQuery('(max-width: 799px) and (min-width: 550px)');
    const isExtraExtraSmallMenu = useMediaQuery('(max-width: 549px) and (min-width: 450px)');
    const isExtraExtraExtraSmallMenu = useMediaQuery('(max-width: 449px) and (min-width: 320px)');
    let marginLargeValueMenu;
    if (isLargeMenu) {
        marginLargeValueMenu = "15%";
    } else if (isSmallMenu) {
        marginLargeValueMenu = "18%";
    } else if (isExtraSmallMenu) {
        marginLargeValueMenu = "14%";
    } else if (isExtraExtraSmallMenu) {
        marginLargeValueMenu = "6%";
    } else if (isExtraExtraExtraSmallMenu) {
        marginLargeValueMenu = "0%";
    }

    // logica de navegacion
    const navigate = useNavigate();
    const redirect = (ruta: string) => {
        navigate(ruta);
    };

    return (
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
                                height: "auto"
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
                    <Tooltip title="Luca Simonazzi"><img src="/logo.png" alt="Logo" width="40%" /></Tooltip>
                    <IconButton
                        sx={{
                            marginLeft: marginLargeValueMenu,
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
                        onClick={() => { redirect("/app"); setIsDrawerOpen(false); }}>
                        Inicio
                    </Button>
                    <Button
                        variant="text"
                        className="boton-menu"
                        onClick={() => { redirect("/sobre-mi"); setIsDrawerOpen(false); }}
                    >
                        Sobre mí
                    </Button>
                    <Button
                        variant="text"
                        className="boton-menu"
                        onClick={() => { redirect("/experiencia"); setIsDrawerOpen(false); }}
                    >
                        Experiencia
                    </Button>
                    <Button
                        variant="text"
                        className="boton-menu"
                        onClick={() => { redirect("/contacto"); setIsDrawerOpen(false); }}
                    >
                        Contacto
                    </Button>
                </Box>
            </Drawer>
        </>
    )
}