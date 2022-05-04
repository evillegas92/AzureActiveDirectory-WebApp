import { configureStore } from '@reduxjs/toolkit';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import forecastsReducer from './slices/forecastsSlice';

export default configureStore({
    reducer: {
        forecasts: forecastsReducer
    }
});