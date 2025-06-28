import { Box, Typography, Divider } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

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

      {/* Skills */}
      <Box id="skills" sx={{ px: 2 }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
          Skills
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {[
            'HTML',
            'CSS',
            'TypeScript',
            'Python',
            'React',
            'Next.js',
            'Material UI',
          ].map((skill, index) => (
            <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CheckIcon sx={{ color: 'orange' }} />
              <Typography>{skill}</Typography>
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
