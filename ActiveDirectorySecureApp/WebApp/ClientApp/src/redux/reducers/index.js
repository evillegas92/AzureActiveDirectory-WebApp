import { combineReducers } from 'redux';
import forecastsReducer from "./forecastReducers";

const rootReducer = combineReducers({
    forecasts: forecastsReducer
});

export default rootReducer;