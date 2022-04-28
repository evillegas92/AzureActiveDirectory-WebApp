import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function forecastReducer(state = initialState.forecasts, action) {
    switch (action.type) {
        case actionTypes.CREATE_FORECAST:
            return [...state, { ...action.forecast }];
        case actionTypes.LOAD_FORECASTS_SUCCESS:
            return action.forecasts; //we only return this because whatever is returned from the API will replace all our state.
        default:
            return state;
    }
}