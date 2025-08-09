import { Box, Typography, Tooltip, useMediaQuery } from '@mui/material';
import { SiNextdotjs, SiTypescript, SiMui } from 'react-icons/si';

export const ExperienciaEmpresarial = () => {
    const isSmallScreen = useMediaQuery('(max-width: 900px)');
    const marginLeftSmartPhone = isSmallScreen ? '18%' : '0%';

    const isMediumScreen = useMediaQuery('(max-width: 800px)');
    const isExtraSmallScreen = useMediaQuery('(max-width: 700px)');

    const marginLeftExtraSmartPhone = isExtraSmallScreen
        ? '26%'
        : isMediumScreen
            ? '38%'
            : '42%';

    return (
        <Box id="Empresarial" sx={{ mb: 4 }}>
            <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold', textAlign: 'left' }}>
                Empresarial
            </Typography>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    gap: 2,
                    marginTop: '2rem',
                    border: '2px solid orangered',
                    borderRadius: '2rem',
                    padding: '1.5rem',
                }}
            >
                <Typography variant="h5">IT Patagonia (Septiembre 2024 - Actualidad)</Typography>
                <Typography variant="body1">
                    Formo parte del equipo de desarrollo frontend en el proyecto <strong>"CV Prestadores OSDE"</strong>,
                    trabajando desde la consultora <strong>IT Patagonia</strong>. Actualmente me desempeño como único
                    desarrollador frontend, impulsando la evolución del producto junto al equipo de backend y UX, participando
                    activamente en las decisiones técnicas y de diseño, y colaborando en la detección y resolución de bugs para
                    afinar el proyecto en su etapa final.
                </Typography>

                {/* Galería */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        gap: 3,
                        mt: 2,
                        width: '100%',
                    }}
                >
                    <Box
                        sx={{
                            display: { xs: 'none', md: 'block' },
                            borderRadius: '10px',
                            overflow: 'hidden',
                            border: '4px solid #ccc',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                            width: '60%',
                            height: '30rem',
                        }}
                    >
                        <Tooltip title="Clickeá para ver el proyecto" arrow>
                            <a href="https://cvprest.osde.com.ar/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                <img
                                    src="/osde-desktop.png"
                                    alt="CV Prestadores OSDE - versión escritorio"
                                    style={{
                                        width: '180%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        display: 'block',
                                    }}
                                />
                            </a>
                        </Tooltip>
                    </Box>

                    <Box
                        sx={{
                            borderRadius: '2rem',
                            overflow: 'hidden',
                            border: '4px solid #ccc',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                            width: { xs: '60%', md: '30%' },
                            marginLeft: marginLeftSmartPhone,
                        }}
                    >
                        <Tooltip title="Clickeá para ver el proyecto" arrow>
                            <a href="https://cvprest.osde.com.ar/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                <img
                                    src="/osde-mobile.jpeg"
                                    alt="CV Prestadores OSDE - versión móvil"
                                    style={{
                                        width: '100%',
                                        display: 'block',
                                    }}
                                />
                            </a>
                        </Tooltip>
                    </Box>
                </Box>

                {/* Tecnologías */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '2rem',
                        marginLeft: marginLeftExtraSmartPhone,
                        gap: 3,
                    }}
                >
                    <Tooltip title="Next.js" arrow>
                        <Box component="span">
                            <SiNextdotjs size={40} color="black" />
                        </Box>
                    </Tooltip>

                    <Tooltip title="TypeScript" arrow>
                        <Box component="span">
                            <SiTypescript size={40} color="#3178C6" />
                        </Box>
                    </Tooltip>

                    <Tooltip title="Material UI" arrow>
                        <Box component="span">
                            <SiMui size={40} color="#0081CB" />
                        </Box>
                    </Tooltip>
                </Box>
            </Box>
        </Box>
    );
};
