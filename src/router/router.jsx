import { createBrowserRouter, useLocation } from 'react-router-dom';
import App from '../App.jsx';
import Catalog from '../pages/Catalog.jsx';
import Product from '../pages/Product.jsx';
import Cart from '../pages/Cart.jsx';
import Checkout from '../pages/Checkout.jsx';

const CatalogWrapper = () => {
    const location = useLocation();
    return <Catalog key={location.key} />;
};

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '/', element: <CatalogWrapper /> },
            { path: '/product/:id', element: <Product /> },
            { path: '/cart', element: <Cart /> },
            { path: '/checkout', element: <Checkout /> },
        ],
    },
]);
