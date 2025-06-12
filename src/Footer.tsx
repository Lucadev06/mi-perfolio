import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { Button, Box, Typography,  Tooltip } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
        gap: "1rem",
        borderRadius: "1rem",
        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.2)", 
        marginTop: "1rem", 
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "right",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <Button>
          <Tooltip title="Mi Linkedin">
            <a href="https://www.linkedin.com/in/luca-simonazzi-371a202b4/" target="_blank">
              <LinkedInIcon sx={{color: "blue"}}/>
            </a>
          </Tooltip>
        </Button>

        <Button>
            <Tooltip title="Mi GitHub">
            <a
                href="https://github.com/Lucadev06?"
                target="_blank"
            >
                <GitHubIcon />
            </a>
            </Tooltip>
        </Button>

        <Button>
            <Tooltip title="Mi Email">
                <a
                    href="mailto:lucasimonazzi9@gmail.com"
                    target="_blank"
                >
                    <EmailIcon />
                </a>
            </Tooltip>
        </Button>
      </Box>

      <Typography variant="body1" sx={{ color: "#333" }}>
        2025 © Luca Simonazzi
      </Typography>
    </Box>
  );
}
