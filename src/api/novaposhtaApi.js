import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = 'd623944a472ec13729426f849f045b3b';

export const novaposhtaApi = createApi({
    reducerPath: 'novaposhtaApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.novaposhta.ua/v2.0/json/' }),
    endpoints: (builder) => ({
        getCities: builder.query({
            query: ({ search }) => ({
                method: 'POST',
                body: {
                    apiKey: API_KEY,
                    modelName: 'Address',
                    calledMethod: 'getCities',
                    methodProperties: { FindByString: search }
                },
            }),
            transformResponse: (response) => response.data || []
        }),
        getWarehouses: builder.query({
            query: ({ cityRef }) => ({
                method: 'POST',
                body: {
                    apiKey: API_KEY,
                    modelName: 'Address',
                    calledMethod: 'getWarehouses',
                    methodProperties: { CityRef: cityRef }
                }
            }),
            transformResponse: (response) => response.data || []
        })
    })
});

export const { useLazyGetCitiesQuery, useLazyGetWarehousesQuery } = novaposhtaApi;
