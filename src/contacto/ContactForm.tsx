import { Box, TextField, Typography, Button } from "@mui/material";

type Props = {
    name: string;
    email: string;
    message: string;
    isSending: boolean;
    onChangeName: (v: string) => void;
    onChangeEmail: (v: string) => void;
    onChangeMessage: (v: string) => void;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const ContactForm = ({
    name, email, message, isSending,
    onChangeName, onChangeEmail, onChangeMessage,
    onSubmit,
}: Props) => (
    <>
        <Typography variant="h3" sx={{ fontWeight: "bold", mb: 3, textAlign: "center" }}>
            Contactame
        </Typography>

        <Typography sx={{ mb: 4, color: "#666", textAlign: "center" }}>
            ¿Tenés una idea o proyecto? ¡Mandame un mensaje y lo charlamos!
        </Typography>

        <Box
            component="form"
            onSubmit={onSubmit}
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                width: "80%",
                maxWidth: "500px",
            }}
        >
            <TextField
                name="name"
                label="Nombre"
                variant="outlined"
                value={name}
                onChange={(e) => onChangeName(e.target.value)}
                required
            />

            <TextField
                name="email"
                label="Email"
                type="email"
                variant="outlined"
                value={email}
                onChange={(e) => onChangeEmail(e.target.value)}
                required
            />

            <TextField
                name="message"
                label="Mensaje"
                variant="outlined"
                multiline
                rows={5}
                value={message}
                onChange={(e) => onChangeMessage(e.target.value)}
                required
            />

            <Button
                type="submit"
                variant="contained"
                disabled={isSending}
                sx={{
                    backgroundColor: "#f9b234",
                    fontWeight: "bold",
                    borderRadius: "2rem",
                    marginTop: "1rem",
                    "&:hover": { backgroundColor: isSending ? "#f9b234" : "#e5a020" },
                }}
            >
                {isSending ? "Enviando..." : "Enviar"}
            </Button>
        </Box>
    </>
);

export default ContactForm;
