import { combineReducers } from 'redux';
import forecastsReducer from "./forecastReducers";

const rootReducer = combineReducers({
    newForecasts: forecastsReducer
});

export default rootReducer;