import { Box, Typography } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";

const ContactSuccess = () => (
    <Box
        sx={{
            backgroundColor: "#e6ffed",
            color: "#237804",
            border: "1px solid #b7eb8f",
            padding: "1rem 1.5rem",
            borderRadius: "0.6rem",
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            fontWeight: 500,
            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
            animation: "fadeIn 0.4s ease-out",
            marginTop: "3rem",
        }}
    >
        <DoneIcon sx={{ color: "#52c41a" }} />
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            ¡Tu mensaje fue enviado exitosamente!
        </Typography>
    </Box>
);

export default ContactSuccess;
