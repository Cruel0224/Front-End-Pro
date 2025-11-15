import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity, clearCart } from '../features/cartSlice';
import { Box, Typography, IconButton, TextField, Button, Divider } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

const Cart = () => {
    const cartItems = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    const [removedItems, setRemovedItems] = useState([]);
    const [updatedItems, setUpdatedItems] = useState([]);

    const handleQuantityChange = (id, value) => {
        const quantity = Math.max(1, Number(value));
        dispatch(updateQuantity({ id, quantity }));
        setUpdatedItems(prev => [...prev, id]);
        setTimeout(() => setUpdatedItems(prev => prev.filter(i => i !== id)), 500);
    };

    const handleRemove = (id) => {
        setRemovedItems(prev => [...prev, id]);
        setTimeout(() => {
            dispatch(removeItem(id));
            setRemovedItems(prev => prev.filter(i => i !== id));
        }, 500);
    };

    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    if (cartItems.length === 0) return (
        <Box p={2} textAlign="center">
            <Typography variant="h5" gutterBottom>Ваша корзина порожня</Typography>
            <Button component={Link} to="/" variant="contained">Повернутись до каталогу</Button>
        </Box>
    );

    return (
        <Box p={2}>
            <Typography variant="h4" gutterBottom>Корзина</Typography>
            {cartItems.map(item => (
                <Box
                    key={item.id}
                    className={`${removedItems.includes(item.id) ? 'cart-item-removed' : ''} ${updatedItems.includes(item.id) ? 'cart-item-updated' : ''}`}
                    display="flex"
                    alignItems="center"
                    mb={2}
                    gap={2}
                >
                    <Box component="img" src={item.image} alt={item.title} width={100} />
                    <Box flex="1">
                        <Typography variant="h6">{item.title}</Typography>
                        <Typography variant="body1">${item.price}</Typography>
                    </Box>
                    <TextField
                        type="number"
                        label="Кількість"
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                        sx={{ width: 100 }}
                    />
                    <IconButton onClick={() => handleRemove(item.id)} color="error">
                        <DeleteIcon />
                    </IconButton>
                </Box>
            ))}

            <Divider sx={{ my: 2 }} />

            <Typography variant="h5">Загальна сума: ${totalPrice.toFixed(2)}</Typography>

            <Box mt={3} display="flex" gap={2}>
                <Button variant="contained" color="primary" component={Link} to="/checkout">Оформити замовлення</Button>
                <Button variant="outlined" color="error" onClick={() => dispatch(clearCart())}>Очистити корзину</Button>
            </Box>
        </Box>
    );
};

export default Cart;

