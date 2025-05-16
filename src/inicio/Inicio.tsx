import { Box, Button, Typography } from "@mui/material";

export const Inicio = () => {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                width: "100%",
                backgroundColor: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                padding: "4rem 6rem",
                gap: "2rem",
                flexWrap: "wrap",
            }}
        >
            {/* Imagen con forma original */}
            <Box
                sx={{
                    width: "500px",
                    height: "580px",
                    backgroundColor: "#fff3db",
                    clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                    overflow: "hidden",
                    boxShadow: "0 12px 36px rgba(0,0,0,0.15)",
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
            <Box sx={{ maxWidth: "600px" }}>
                <Typography variant="h2" sx={{ fontWeight: "bold", mb: 2 }}>
                    ¡Hola! Soy Luca
                </Typography>
                <Typography sx={{ color: "#444", mb: 3, fontSize: "1.2rem" }}>
                    Desarrollador Frontend con foco en interfaces modernas, funcionales y centradas en el usuario. Trabajo con React y MUI, con un enfoque visual limpio y efectivo.
                </Typography>
                <Button
                    variant="contained"
                    sx={{
                        display: "block",
                        margin: "0 auto",
                        backgroundColor: "#f9b234",
                        color: "#fff",
                        padding: "0.75rem 2rem",
                        borderRadius: "2rem",
                        fontWeight: "bold",
                        "&:hover": {
                            backgroundColor: "#e5a020",
                        },
                    }}
                >
                    Contactame
                </Button>
            </Box>
        </Box>
    );
};
