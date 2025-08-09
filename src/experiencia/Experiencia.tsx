import { Box } from '@mui/material';
import { ExperienciaMenu } from './ExperienciaMenu';
import { ExperienciaEmpresarial } from './ExperienciaEmpresarial';
import { ExperienciaFreelance } from './ExperienciaFreelance';

export const Experiencia = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      sx={{
        width: '85%',
        maxWidth: '1000px',
        mx: 'auto',
        px: 2,
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
      }}
    >
      <ExperienciaMenu onScrollTo={scrollToSection} />
      <ExperienciaEmpresarial />
      <ExperienciaFreelance />
    </Box>
  );
};
