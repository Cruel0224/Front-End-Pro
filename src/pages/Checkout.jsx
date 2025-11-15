import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../features/cartSlice';
import { Box, TextField, Button, Typography, FormControl, Snackbar, Alert, Autocomplete, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useLazyGetCitiesQuery, useLazyGetWarehousesQuery } from '../api/novaposhtaApi';

const Checkout = () => {
    const cartItems = useSelector(state => state.cart.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        city: null,
        warehouse: null,
        delivery: '',
        payment: ''
    });
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const [getCities, { data: citiesData, isFetching: citiesLoading }] = useLazyGetCitiesQuery();
    const [getWarehouses, { data: warehousesData, isFetching: warehousesLoading }] = useLazyGetWarehousesQuery();

    const [cityInput, setCityInput] = useState('');

    useEffect(() => {
        if (cityInput.length >= 2) {
            getCities({ search: cityInput });
        }
    }, [cityInput, getCities]);

    useEffect(() => {
        if (form.city) {
            getWarehouses({ cityRef: form.city.Ref });
            setForm(prev => ({ ...prev, warehouse: null }));
        }
    }, [form.city, getWarehouses]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (cartItems.length === 0) {
            alert('Корзина порожня!');
            return;
        }
        setOpenSnackbar(true);
        dispatch(clearCart());
        setTimeout(() => navigate('/'), 2000);
    };

    return (
        <Box p={2} maxWidth={600} mx="auto">
            <Typography variant="h4" gutterBottom>Оформлення замовлення</Typography>
            <form onSubmit={handleSubmit}>

                <Typography variant="h6" mt={2}>Особисті дані</Typography>
                <TextField fullWidth label="Ім'я" name="firstName" value={form.firstName} onChange={handleChange} margin="normal" required />
                <TextField fullWidth label="Прізвище" name="lastName" value={form.lastName} onChange={handleChange} margin="normal" required />
                <TextField fullWidth label="Телефон" name="phone" value={form.phone} onChange={handleChange} margin="normal" required />
                <TextField fullWidth label="Email" name="email" value={form.email} onChange={handleChange} margin="normal" required type="email" />
                <Typography variant="h6" mt={2}>Адреса доставки</Typography>

                <FormControl fullWidth margin="normal">
                    <Autocomplete
                        options={["Нова Пошта", "Кур'єр", "Самовивіз"]}
                        value={form.delivery}
                        onChange={(e, newValue) => setForm(prev => ({ ...prev, delivery: newValue }))}
                        renderInput={(params) => <TextField {...params} label="Спосіб доставки" required />}
                    />
                </FormControl>

                <Autocomplete
                    options={citiesData || []}
                    getOptionLabel={(option) => option.Description || ""}
                    value={form.city}
                    onChange={(e, newValue) =>
                        setForm((prev) => ({ ...prev, city: newValue }))
                    }
                    inputValue={cityInput}
                    onInputChange={(e, newValue) => setCityInput(newValue)}
                    filterOptions={(x) => x}
                    noOptionsText={
                        cityInput.length < 2
                            ? "Введіть мінімум 2 букви"
                            : "Місто не знайдено"
                    }
                    loading={citiesLoading}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Місто"
                            margin="normal"
                            required
                            slotProps={{
                                input: {
                                    ...params.InputProps,
                                    endAdornment: (
                                        <>
                                            {citiesLoading && (
                                                <CircularProgress size={20} />
                                            )}
                                            {params.InputProps.endAdornment}
                                        </>
                                    ),
                                },
                            }}
                        />
                    )}
                />

                <Autocomplete
                    options={warehousesData || []}
                    getOptionLabel={(option) => option.Description || ""}
                    value={form.warehouse}
                    onChange={(e, newValue) =>
                        setForm((prev) => ({ ...prev, warehouse: newValue }))
                    }
                    noOptionsText={
                        warehousesLoading
                            ? "Завантаження..."
                            : "Відділення не знайдено"
                    }
                    loading={warehousesLoading}
                    disabled={!form.city}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Відділення"
                            margin="normal"
                            required
                            slotProps={{
                                input: {
                                    ...params.InputProps,
                                    endAdornment: (
                                        <>
                                            {warehousesLoading && (
                                                <CircularProgress size={20} />
                                            )}
                                            {params.InputProps.endAdornment}
                                        </>
                                    ),
                                },
                            }}
                        />
                    )}
                />

                <FormControl fullWidth margin="normal">
                    <Autocomplete
                        options={["Оплата при отриманні", "Картка", "PayPal"]}
                        value={form.payment}
                        onChange={(e, newValue) => setForm(prev => ({ ...prev, payment: newValue }))}
                        renderInput={(params) => <TextField {...params} label="Спосіб оплати" required />}
                    />
                </FormControl>

                <Button variant="contained" color="primary" type="submit" fullWidth sx={{ mt: 3 }}>
                    Підтвердити замовлення
                </Button>
            </form>

            <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={() => setOpenSnackbar(false)}>
                <Alert severity="success" sx={{ width: '100%' }}>Замовлення успішно оформлено!</Alert>
            </Snackbar>
        </Box>
    );
};

export default Checkout;

