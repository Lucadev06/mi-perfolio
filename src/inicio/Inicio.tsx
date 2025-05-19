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
                position: "relative",
                overflow: "hidden",
                marginTop: isDesktop ? "2rem" : "0",
            }}
        >
            
            <Box
                sx={{
                    position: "absolute",
                    top: "-10%",
                    left: "-10%",
                    width: "350px",
                    height: "350px",
                    background: "radial-gradient(circle at center, #ffe7c4, transparent 70%)",
                    filter: "blur(100px)",
                    zIndex: 0,
                }}
            />
            <Box
                sx={{
                    position: "absolute",
                    bottom: "-15%",
                    right: "-10%",
                    width: "300px",
                    height: "300px",
                    background: "radial-gradient(circle at center, #f9b234, transparent 70%)",
                    filter: "blur(120px)",
                    zIndex: 0,
                }}
            />

            <Box
                sx={{
                    width: "45%",
                    aspectRatio: "5 / 6",
                    minWidth: "280px",
                    perspective: "1000px",
                    zIndex: 1,
                    "&:hover .flip-inner": {
                        transform: "rotateY(180deg)",
                    },
                }}
            >
                <Box
                    className="flip-inner"
                    sx={{
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        transformStyle: "preserve-3d",
                        transition: "transform 0.8s ease",
                    }}
                >
                    
                    <Box
                        sx={{
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            backfaceVisibility: "hidden",
                             clipPath:
                       "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 100% 100%, 17% 100%, 0% 70%, 0% 30%)",
                            backgroundColor: "#fff3db",
                            boxShadow: "0 12px 36px rgba(0,0,0,0.15)",
                            zIndex: 2,
                        }}
                    >
                        <img
                            src="/IMG_3009.png"
                            alt="Luca"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                objectPosition: "center top",
                                borderRadius: 0, 
                            }}
                        />
                    </Box>

                    
                    <Box
                        sx={{
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            transform: "rotateY(180deg)",
                            backfaceVisibility: "hidden",
                               clipPath:
                        "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 100% 100%, 30% 100%, 0% 70%, 0% 30%)",
                            backgroundColor: "#fff3db",
                            boxShadow: "0 12px 36px rgba(0,0,0,0.15)",
                            zIndex: 1,
                        }}
                    >
                        <img
                            src="/imagen-animada.png"
                            alt="Luca animado"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                objectPosition: "center top",
                                borderRadius: 0,
                            }}
                        />
                    </Box>
                </Box>
            </Box>

            <Box
                sx={{
                    width: "45%",
                    minWidth: "280px",
                    textAlign: { xs: "center", md: "left" },
                    zIndex: 2,
                }}
            >
                <Typography
                    sx={{
                        fontWeight: "bold",
                        mb: 2,
                        fontSize: {
                            xs: "2rem",
                            sm: "2.5rem",
                            md: "3rem",
                            lg: "3.5rem",
                        },
                    }}
                >
                    ¡Hola! Soy Luca
                </Typography>

                <Typography sx={{ color: "#444", mb: 3, fontSize: "1.2rem" }}>
                    Desarrollador Frontend enfocado en crear experiencias modernas y funcionales. Me especializo en React, MUI y el diseño limpio con impacto visual.
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                        mt: 2,
                    }}
                >
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
