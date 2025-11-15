import React, { useState, useEffect } from 'react';
import { useGetProductsQuery, useGetCategoriesQuery } from '../api/productsApi';
import ProductCard from '../components/ProductCard';
import {
    TextField,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
    Pagination,
    Box,
    CircularProgress,
    Slider,
    Typography,
    Button
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import debounce from 'lodash/debounce';
import '../styles/catalog.scss';

const ITEMS_PER_PAGE = 6;

const Catalog = () => {
    const { data: products = [], isLoading } = useGetProductsQuery();
    const { data: categories = [] } = useGetCategoriesQuery();

    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('');
    const [priceRange, setPriceRange] = useState([0, 1000]);
    const [page, setPage] = useState(1);
    const [filterOpen, setFilterOpen] = useState(false);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [page]);

    const handleSearch = debounce((e) => setSearch(e.target.value), 300);
    const handlePriceChange = (e, newValue) => {
        setPriceRange(newValue);
        setPage(1);
    };

    const filteredProducts = products.filter(p =>
        (!category || p.category === category) &&
        p.title.toLowerCase().includes(search.toLowerCase()) &&
        p.price >= priceRange[0] &&
        p.price <= priceRange[1]
    );

    const pageCount = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
    const paginatedProducts = filteredProducts.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

    if (isLoading) return (
        <Box display="flex" justifyContent="center" mt={5}>
            <CircularProgress />
        </Box>
    );

    const closeFilter = () => setFilterOpen(false);

    return (
        <Box className="catalog-container">
            <Button
                variant="contained"
                startIcon={<MenuIcon />}
                className="filter-toggle-button"
                onClick={() => setFilterOpen(true)}
            >
                Фільтри
            </Button>
            <Box
                className={`filter-sidebar-overlay ${filterOpen ? 'open' : ''}`}
                onClick={closeFilter}
            >
                <Box
                    className={`filter-sidebar ${filterOpen ? 'open' : ''}`}
                    onClick={e => e.stopPropagation()}
                >
                    <Typography variant="h6" gutterBottom>Фільтри</Typography>
                    <Box display="flex" flexDirection="column" gap={2}>
                        <TextField label="Пошук" variant="outlined" onChange={handleSearch} />

                        <FormControl variant="outlined" fullWidth>
                            <InputLabel>Категорія</InputLabel>
                            <Select
                                variant="outlined"
                                value={category}
                                onChange={e => setCategory(e.target.value)}
                                label="Категорія"
                            >
                                <MenuItem value="">Всі</MenuItem>
                                {categories.map(cat => (
                                    <MenuItem key={cat} value={cat}>{cat}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <Box>
                            <Typography gutterBottom>Ціна: ${priceRange[0]} - ${priceRange[1]}</Typography>
                            <Slider
                                value={priceRange}
                                onChange={handlePriceChange}
                                valueLabelDisplay="auto"
                                min={0}
                                max={1000}
                            />
                        </Box>

                        <Button
                            variant="outlined"
                            color="secondary"
                            onClick={closeFilter}
                        >
                            Закрити
                        </Button>
                    </Box>
                </Box>
            </Box>

            <Box className="products-wrapper">
                {paginatedProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}

                {pageCount > 1 && (
                    <Box width="100%" display="flex" justifyContent="center" mt={3}>
                        <Pagination
                            count={pageCount}
                            page={page}
                            onChange={(e, value) => setPage(value)}
                        />
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default Catalog;
