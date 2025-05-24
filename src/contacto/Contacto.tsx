import { Box, TextField, Typography, Button } from "@mui/material";

export const Contacto = () => {
    return (
        <Box
            sx={{
                
                backgroundColor: "#f9f9f9",
                padding: "4rem 2rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Typography
                variant="h3"
                sx={{ fontWeight: "bold", mb: 3, textAlign: "center" }}
            >
                Contactame
            </Typography>

            <Typography sx={{ mb: 4, color: "#666", textAlign: "center" }}>
                ¿Tenés una idea o proyecto? ¡Mandame un mensaje y lo charlamos!
            </Typography>

            <Box
                component="form"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    width: "50%",
                    
                }}
                
            >
                <TextField label="Nombre" variant="outlined" required sx={{width: "100%"}}/>
                <TextField label="Email" type="email" variant="outlined" required />
                <TextField
                    label="Mensaje"
                    variant="outlined"
                    multiline
                    rows={5}
                    required
                />
                <Button
                    type="submit"
                    variant="contained"
                    sx={{
                        backgroundColor: "#f9b234",
                        fontWeight: "bold",
                        "&:hover": { backgroundColor: "#e5a020" },
                        borderRadius: "2rem",
                    }}
                >
                    Enviar
                </Button>
            </Box>
        </Box>
    );
};
