import { Box, Typography, Tooltip, useMediaQuery, useTheme } from '@mui/material';
import { SiNextdotjs, SiTypescript, SiMui } from 'react-icons/si';
import { EXPERIENCIA_FREELANCE } from './constants/experiencia';

export const ExperienciaFreelance = () => {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

    // Ancho compartido para galería e íconos (igual que en Empresarial)
    const mediaWidth = isDesktop ? '100%' : '60%';

    return (
        <Box id="Freelance" sx={{ mb: 4 }}>
            <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold', textAlign: 'left' }}>
                Freelance
            </Typography>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    gap: 2,
                    mt: '2rem',
                    border: '2px solid orangered',
                    borderRadius: '2rem',
                    p: '1.5rem',
                }}
            >
                <Typography variant="h5">Hasser Motor Works (Febrero 2025)</Typography>

                <Typography
                    variant="body1"
                    dangerouslySetInnerHTML={{ __html: EXPERIENCIA_FREELANCE }}
                />

                {/* Galería: SOLO una imagen según breakpoint */}
                <Box sx={{ mt: 2, width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <Box
                        sx={{
                            width: mediaWidth,
                            height: isDesktop ? '30rem' : 'auto',
                            borderRadius: isDesktop ? '10px' : '2rem',
                            overflow: 'hidden',
                            border: '4px solid #ccc',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                            mx: 'auto',
                        }}
                    >
                        <Tooltip title="Clickeá para ver el proyecto" arrow>
                            <a
                                href="https://hassermotorworks.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: 'none' }}
                            >
                                {isDesktop ? (
                                    <img
                                        src="/hasser-desktop.png"
                                        alt="Hasser Motor Works - versión escritorio"
                                        style={{
                                            width: '110%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            objectPosition: 'top center',
                                            display: 'block',
                                        }}
                                    />
                                ) : (
                                    <img
                                        src="/hasser-mobile.jpeg"
                                        alt="Hasser Motor Works - versión móvil"
                                        style={{ width: '100%', display: 'block' }}
                                    />
                                )}
                            </a>
                        </Tooltip>
                    </Box>
                </Box>

                {/* Tecnologías (mismo ancho que la galería) */}
                <Box
                    sx={{
                        width: mediaWidth,
                        mx: 'auto',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 3,
                        mt: '2rem',
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
