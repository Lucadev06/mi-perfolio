import { Header } from "./header/Header";
import { Box } from '@mui/material';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Inicio } from "./inicio/Inicio";
import { SobreMi } from "./sobre-mi/SobreMi";
import { Experiencia } from "./experiencia/Experiencia";
import { Contacto } from "./contacto/Contacto";
import Footer from "./Footer";


function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "black" }}>
        <Header />
      </Box>

      <Routes>
        <Route path="/" element={<Navigate to="/app" replace />} />
        <Route path="/app" element={<Inicio />} />
        <Route path="/sobre-mi" element={<SobreMi />} />
        <Route path="/experiencia" element={<Experiencia />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;
