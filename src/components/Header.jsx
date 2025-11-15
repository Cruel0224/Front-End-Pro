import { AppBar, Toolbar, Typography, IconButton, Badge, Box, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    const cartItems = useSelector(state => state.cart.items);
    const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <>
            <AppBar position="fixed">
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="h6" component={Link} to="/" sx={{ color: '#fff', textDecoration: 'none' }}>
                        Online-Shop
                    </Typography>
                    <Box display="flex" gap={2} alignItems="center">
                        <Button component={Link} to="/" sx={{ color: '#fff' }}>Каталог</Button>
                        <IconButton component={Link} to="/cart" color="inherit">
                            <Badge badgeContent={totalQuantity} color="error">
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>

            <Box sx={{ height: 64 }} />
        </>
    );
};

export default Header;
