import { Box, Typography, Divider } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

/* Función para scroll suave por ID
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};*/

export const SobreMi = () => {
  return (
    <Box
      sx={{
        width: '80%',
        maxWidth: '1000px',
        mx: 'auto',
        px: 2,
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
      }}
    >
      {/* Botones de navegación
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '1.3rem',
          mb: 4,
        }}
      >
        <Button
          variant="text"
          onClick={() => scrollToSection('quien-soy')}
          sx={{
            color: 'orange',
            fontWeight: 'bold',
            fontSize: '1.2rem',
            '&:hover': { textDecoration: 'underline' },
          }}
        >
          Quién soy
        </Button>

        <Button
          variant="text"
          onClick={() => scrollToSection('intereses')}
          sx={{
            color: 'orange',
            fontWeight: 'bold',
            fontSize: '1.2rem',
            '&:hover': { textDecoration: 'underline' },
          }}
        >
          Intereses
        </Button>

        <Button
          variant="text"
          onClick={() => scrollToSection('hobbies')}
          sx={{
            color: 'orange',
            fontWeight: 'bold',
            fontSize: '1.2rem',
            '&:hover': { textDecoration: 'underline' },
          }}
        >
          Hobbies
        </Button>
      </Box> */}

      {/* Quién soy */}
      <Box id="quien-soy" sx={{ px: 2 }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
          Quién soy
        </Typography>

        <Typography variant="body1" sx={{ fontSize: '1.2rem', lineHeight: 1.6 }}>
          Soy Luca Simonazzi, programador frontend y estudiante de Licenciatura en Sistemas.
          Disfruto transformar ideas en experiencias web atractivas y funcionales, siempre
          buscando aprender y mejorar.
        </Typography>
      </Box>

      <Divider sx={{ borderColor: 'orange' }} />

      {/* Intereses */}
      <Box id="intereses" sx={{ px: 2 }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
          Intereses
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {[
            'Desarrollo de interfaces web modernas',
            'Experiencia de usuario (UX) y diseño visual',
            'Frameworks modernos (React, Next.js)',
            'Aprender nuevas tecnologías y patrones de diseño',
          ].map((interes, index) => (
            <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CheckIcon sx={{ color: 'orange' }} />
              <Typography>{interes}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Divider sx={{ borderColor: 'orange' }} />

      {/* Hobbies */}
      <Box id="hobbies" sx={{ px: 2 }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
          Hobbies
        </Typography>

        <Typography>
          Fuera del código, soy bastante fanático del gimnasio, el fútbol y la UFC. También disfruto de un buen mate, que nunca falta mientras programo o aprendo algo nuevo. Me gusta mantener el equilibrio entre entrenar y seguir mis pasiones.
        </Typography>

      </Box>
    </Box>
  );
};
