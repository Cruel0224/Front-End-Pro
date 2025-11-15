import { Box, Typography, Link as MuiLink } from '@mui/material';

const Footer = () => {
    return (
        <Box mt={5} p={3} bgcolor="#1976d2" color="#fff" textAlign="center">
            <Typography variant="body1">
                &copy; {new Date().getFullYear()} Online-Shop. Усі права захищені.
            </Typography>
            <Typography variant="body2">
                <MuiLink href="#" color="inherit">Політика конфіденційності</MuiLink> | <MuiLink href="#" color="inherit">Умови використання</MuiLink>
            </Typography>
        </Box>
    );
};

export default Footer;
