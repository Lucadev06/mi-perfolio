import { Box } from "@mui/material";
import ContactForm from "../contacto/ContactForm";
import ContactSuccess from "../contacto/ContactSuccess";
import { useContactForm } from "../contacto/hooks/useContactForm";

export const Contacto = () => {
    const {
        name, setName,
        email, setEmail,
        message, setMessage,
        isSending, isSent,
        handleSubmit,
    } = useContactForm();

    return (
        <Box
            sx={{
                minHeight: "80vh",
                backgroundColor: "#f9f9f9",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            {isSent ? (
                <ContactSuccess />
            ) : (
                <ContactForm
                    name={name}
                    email={email}
                    message={message}
                    isSending={isSending}
                    onChangeName={setName}
                    onChangeEmail={setEmail}
                    onChangeMessage={setMessage}
                    onSubmit={handleSubmit}
                />
            )}
        </Box>
    );
};
