import * as actionTypes from "../actions/actionTypes";

export default function forecastReducer(state = [], action) {
    switch (action.type) {
        case actionTypes.CREATE_FORECAST:
            return [...state, { ...action.forecast }];
        default:
            return state;
    }
}