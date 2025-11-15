import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProductCard = ({ product }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/product/${product.id}`);
    };

    return (
        <Card
            sx={{ width: 250, cursor: 'pointer', transition: 'transform 0.2s' }}
            onClick={handleClick}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        >
            <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.title}
                sx={{ objectFit: 'contain' }}
            />
            <CardContent>
                <Typography variant="h6" component="div" noWrap>{product.title}</Typography>
                <Typography variant="body2" color="text.secondary">${product.price}</Typography>
            </CardContent>
        </Card>
    );
};

ProductCard.propTypes = {
    product: PropTypes.object.isRequired
};

export default ProductCard;
