// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define our single API slice object
export const apiSlice = createApi({
    // The cache reducer expects to be added at `state.api` (already default - this is optional)
    reducerPath: 'api',
    // All of our requests will have URLs starting with ''
    baseQuery: fetchBaseQuery({ baseUrl: '' }),
    tagTypes: ['forecasts'], //tags are used to refresh cached data
    // The "endpoints" represent operations and requests for this server
    endpoints: builder => ({
        // The `getForecasts` endpoint is a "query" operation that returns data
        getForecasts: builder.query({
            // The URL for the request is 'weatherforecast'
            query: () => 'weatherforecast',
            providesTags: ['forecasts']
        }),
        getForecast: builder.query({
            query: forecastId => `weatherforecast/${forecastId}`
        })
    })
})

// Export the auto-generated hook for the `getForecasts` query endpoint
export const { useGetForecastsQuery, useGetForecastQuery } = apiSlice