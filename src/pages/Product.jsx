import { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductByIdQuery, useGetProductsQuery } from '../api/productsApi';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/cartSlice';
import { Box, Typography, Button, TextField, CircularProgress } from '@mui/material';
import ProductCard from '../components/ProductCard';

const Product = () => {
    const { id } = useParams();
    const { data: product, isLoading } = useGetProductByIdQuery(id);
    const { data: allProducts = [] } = useGetProductsQuery();
    const dispatch = useDispatch();

    const [quantity, setQuantity] = useState(1);
    const imgRef = useRef();

    if (isLoading || !product) return (
        <Box display="flex" justifyContent="center" mt={5}>
            <CircularProgress />
        </Box>
    );

    const handleAddToCart = () => {
        dispatch(addItem({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            quantity
        }));
    };

    const similarProducts = allProducts
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 4);

    return (
        <Box p={2}>
            <Box display="flex" justifyContent="center" mb={3}>
                <Box
                    component="img"
                    src={product.image}
                    alt={product.title}
                    width="100%"
                    maxWidth={400}
                    sx={{ objectFit: 'contain' }}
                    ref={imgRef}
                />
            </Box>
            <Box textAlign="center" mb={3}>
                <Typography variant="h4" gutterBottom>{product.title}</Typography>
                <Typography variant="h6" color="text.secondary" gutterBottom>${product.price}</Typography>
                <Typography variant="body1" component="p" sx={{ mb: 2 }}>
                    {product.description}
                </Typography>
                <Typography variant="body2" color={product.rating?.count > 0 ? "green" : "red"}>
                    {product.rating?.count > 0 ? "В наявності" : "Немає на складі"}
                </Typography>

                <Box display="flex" gap={2} justifyContent="center" mt={2}>
                    <TextField
                        type="number"
                        label="Кількість"
                        value={quantity}
                        onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
                        sx={{ width: 100 }}
                    />
                    <Button variant="contained" onClick={handleAddToCart}>
                        Додати в корзину
                    </Button>
                </Box>
            </Box>

            {similarProducts.length > 0 && (
                <Box mt={5}>
                    <Typography variant="h5" gutterBottom>Схожі товари</Typography>
                    <Box display="flex" flexWrap="wrap" gap={2} justifyContent="center">
                        {similarProducts.map(p => (
                            <ProductCard key={p.id} product={p} />
                        ))}
                    </Box>
                </Box>
            )}
        </Box>
    );
};

export default Product;
