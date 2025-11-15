import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from '../api/productsApi';
import cartReducer from '../features/cartSlice';
import { novaposhtaApi } from '../api/novaposhtaApi';

export const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        cart: cartReducer,
        [novaposhtaApi.reducerPath]: novaposhtaApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(productsApi.middleware)
            .concat(novaposhtaApi.middleware),
});

