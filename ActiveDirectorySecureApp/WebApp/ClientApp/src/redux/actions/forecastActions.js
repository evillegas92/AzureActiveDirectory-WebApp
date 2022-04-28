import * as actionTypes from "./actionTypes";
import { handleResponse, handleError } from "../../utilities/apiUtilities";

export function createForecast(forecast) {
    return {
        type: actionTypes.CREATE_FORECAST, forecast: forecast };
}

export function loadForecastsSuccess(forecasts) {
    return {
        type: actionTypes.LOAD_FORECASTS_SUCCESS,
        forecasts: forecasts
    };
}

// thunk to retrieve forecasts asynchronously
export function loadForecasts() {
    return function (dispatch) {
        return fetch("weatherforecast")
        .then(handleResponse)
        .then(forecasts => {
            dispatch(loadForecastsSuccess(forecasts));
        })
        .catch(handleError);
    }
}