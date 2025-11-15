import { useState, useEffect } from 'react';
import { Fab } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ScrollToTopButton = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) setVisible(true);
        else setVisible(false);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    if (!visible) return null;

    return (
        <Fab
            onClick={scrollToTop}
            sx={{
                position: 'fixed',
                bottom: 40,
                right: 40,
                backgroundColor: '#ff9800', // яскравий помаранчевий
                color: '#fff',
                '&:hover': {
                    backgroundColor: '#ffb74d',
                },
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                zIndex: 1500,
            }}
        >
            <KeyboardArrowUpIcon />
        </Fab>
    );
};

export default ScrollToTopButton;
