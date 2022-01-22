// import { combineReducers } from "redux";
import { ADVERTS_LOADED,  AUTH_LOGIN_FAILURE,  AUTH_LOGIN_REQUEST,  AUTH_LOGIN_SUCCES, AUTH_LOGOUT } from "./types";

const defaultState = {
    auth: false,
    adverts: [],
    ui: {
        isLoading: false,
        error: null,
        saveValue:false
    }
};


export function auth(authState = defaultState.auth, action) {
    switch (action.type) {
        case AUTH_LOGIN_SUCCES:
            return true;
        case AUTH_LOGOUT:
            return false;
        default:
            return authState;
    }
};

export function adverts(advertsState = defaultState.adverts, action) {
    switch (action.type) {
        case ADVERTS_LOADED:
            return action.payload;
        default:
            return advertsState;
    }
};

export function ui(uiState = defaultState.ui, action) {
    switch (action.type) {
        case AUTH_LOGIN_REQUEST:
            return { isLoading: true, error: null, saveValue:false};
        case AUTH_LOGIN_SUCCES:
            return {isLoading: false, error:null, saveValue: true, }
        case AUTH_LOGIN_FAILURE:
            return { isLoading: false, error: action.payload, saveValue:false }
        default:
            return uiState;
    }
};


