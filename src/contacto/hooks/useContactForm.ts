import { useState } from "react";
import { useNavigate } from "react-router-dom";

type FormData = { name: string; email: string; message: string };

export const useContactForm = (endpoint = "https://formspree.io/f/manozrnr") => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const navigate = useNavigate();

    const reset = () => {
        setName("");
        setEmail("");
        setMessage("");
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSending(true);

        const payload: FormData = { name, email, message };

        try {
            const res = await fetch(endpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify(payload),
            });

            if (!res.ok) throw new Error("Error al enviar");

            reset();
            setIsSent(true);
            // mismo comportamiento: mostrar OK y volver a /app luego de 3s
            setTimeout(() => {
                setIsSent(false);
                navigate("/app");
            }, 3000);
        } catch {
            alert("Hubo un error al enviar el mensaje.");
        } finally {
            setIsSending(false);
        }
    };

    return {
        name, setName,
        email, setEmail,
        message, setMessage,
        isSending, isSent,
        handleSubmit,
    };
};
