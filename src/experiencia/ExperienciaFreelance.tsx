import { Box, Typography, Tooltip, useMediaQuery } from '@mui/material';
import { SiNextdotjs, SiTypescript, SiMui } from 'react-icons/si';

export const ExperienciaFreelance = () => {
    const isSmallScreen = useMediaQuery('(max-width: 900px)');
    const marginLeftSmartPhone = isSmallScreen ? '18%' : '0%';

    const isMediumScreen = useMediaQuery('(max-width: 800px)');
    const isExtraSmallScreen = useMediaQuery('(max-width: 700px)');

    const marginLeftExtraSmartPhone = isExtraSmallScreen
        ? '26%' // celulares chicos
        : isMediumScreen
            ? '38%' // tablets / celulares grandes
            : '42%'; // desktop

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
                    marginTop: '2rem',
                    border: '2px solid orangered',
                    borderRadius: '2rem',
                    padding: '1.5rem',
                }}
            >
                <Typography variant="h5">Hasser Motor Works (Febrero 2025)</Typography>
                <Typography variant="body1">
                    Desarrollo freelance del sitio web oficial de <strong>"Hasser Motor Works"</strong>, un emprendimiento
                    dedicado a la restauración y personalización de automóviles. Realicé el diseño e implementación completa del
                    frontend, trabajando en estrecha colaboración con el cliente para definir la estructura, el estilo visual y la
                    experiencia de usuario. El proyecto fue desarrollado con <strong>Next.js</strong>, <strong>TypeScript</strong> y
                    <strong> Material UI</strong>, con foco en la performance, el diseño responsivo y la optimización SEO.
                </Typography>

                {/* Galería PC + Mobile */}
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
                            <a
                                href="https://hassermotorworks.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: 'none' }}
                            >
                                <img
                                    src="/hasser-desktop.png"
                                    alt="Hasser Motor Works - versión escritorio"
                                    style={{
                                        width: '170%',
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
                            <a
                                href="https://hassermotorworks.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: 'none' }}
                            >
                                <img
                                    src="/hasser-mobile.jpeg"
                                    alt="Hasser Motor Works - versión móvil"
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
