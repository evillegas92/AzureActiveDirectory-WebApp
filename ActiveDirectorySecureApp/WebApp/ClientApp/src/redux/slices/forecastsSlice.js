import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { handleResponse, handleError } from "../../utilities/apiUtilities";

const initialState = {
    forecasts: [],
    status: 'idle',
    error: null
};

//Thunks
export const fetchForecasts = createAsyncThunk('forecasts/fetchForecasts', async () => {
    //TODO surround in try-catch and use handleError
    const response = await fetch("weatherforecast");
    const data = await handleResponse(response);
    return data;
});

// This slice is responsible for handling all updates to the forecasts data.
const forecastsSlice = createSlice({
    name: 'forecasts',
    initialState: initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder.addCase(fetchForecasts.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(fetchForecasts.fulfilled, (state, action) => {
            state.status = 'succeeded'
            //Add any fetched forecasts to the array
            state.forecasts = state.forecasts.concat(action.payload)
        })
        .addCase(fetchForecasts.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        });
    }
})

export default forecastsSlice.reducer

//Reusable selectors
export const selectAllForecasts = state => state.forecasts.forecasts;

export const selectForecastById = (state, forecastId) => state.forecasts.forecasts.find(fc => fc.date === forecastId);
