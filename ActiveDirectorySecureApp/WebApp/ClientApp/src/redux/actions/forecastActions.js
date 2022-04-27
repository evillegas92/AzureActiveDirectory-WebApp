import * as actionTypes from "./actionTypes";

export function createForecast(forecast) {
    return {
        type: actionTypes.CREATE_FORECAST, forecast: forecast };
}