import { Box, Typography, Divider } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { QUIEN_SOY_TEXT, SKILLS, HOBBIES_TEXT } from '../sobre-mi/constants/sobreMi';

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
          {QUIEN_SOY_TEXT}
        </Typography>
      </Box>

      <Divider sx={{ borderColor: 'orange' }} />

      {/* Skills */}
      <Box id="skills" sx={{ px: 2 }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
          Skills
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {SKILLS.map((skill, index) => (
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
        <Typography>{HOBBIES_TEXT}</Typography>
      </Box>
    </Box>
  );
};
