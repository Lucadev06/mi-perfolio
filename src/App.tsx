import { Header } from "./Header"
import { Box } from '@mui/material'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Inicio } from "./inicio/Inicio";
import { SobreMi } from "./sobre-mi/SobreMi";
import { Skills } from "./skills/Skilss";
import { Experiencia } from "./experiencia/Experiencia";
import { Contacto } from "./contacto/Contacto";

function App() {
  return (
    <BrowserRouter>
      {/* Header siempre visible */}
      <Box sx={{ backgroundColor: "black" }}>
        <Header />
        
      </Box>
      {/* Acá van las páginas que cambian según la ruta */}
      <Routes>
        <Route path="/app" element={<Inicio />} />
        <Route path="/sobre-mi" element={<SobreMi />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experiencia" element={<Experiencia />} />
        <Route path="/contacto" element={<Contacto />} />
        {/* Puedes agregar más rutas según sea necesario */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
