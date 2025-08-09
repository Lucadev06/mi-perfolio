import { Box, Button } from '@mui/material';

interface ExperienciaMenuProps {
    onScrollTo: (id: string) => void;
}

export const ExperienciaMenu = ({ onScrollTo }: ExperienciaMenuProps) => {
    return (
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
                onClick={() => onScrollTo('Empresarial')}
                sx={{
                    color: 'orange',
                    fontWeight: 'bold',
                    fontSize: '1.2rem',
                    '&:hover': { textDecoration: 'underline' },
                }}
            >
                Empresarial
            </Button>

            <Button
                variant="text"
                onClick={() => onScrollTo('Freelance')}
                sx={{
                    color: 'orange',
                    fontWeight: 'bold',
                    fontSize: '1.2rem',
                    '&:hover': { textDecoration: 'underline' },
                }}
            >
                Freelance
            </Button>
        </Box>
    );
};
