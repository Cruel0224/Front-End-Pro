import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { Box } from '@mui/material';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh'
            }}
        >
            <Header />
            <Box sx={{ flex: 1, mt: 8 }}>
                <Outlet />
                <ScrollToTopButton />
            </Box>
            <Footer />
        </Box>
    );
}

export default App;
