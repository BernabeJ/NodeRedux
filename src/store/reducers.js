// import { combineReducers } from "redux";
import { ADVERTS_CREATED_SUCCES, ADVERTS_LOADED,  ADVERTS_LOADED_SUCCES,  ADVERT_LOADED_SUCCES,  AUTH_LOGIN_FAILURE,  AUTH_LOGIN_REQUEST,  AUTH_LOGIN_SUCCES, AUTH_LOGOUT, UI_RESET_ERROR } from "./types";

const defaultState = {
    auth: false,
    adverts: {
        loaded: false,
        data:[],
    },
    ui: {
        isLoading: false,
        error: null,
        
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
        case ADVERTS_LOADED_SUCCES:
            return { loaded: true, data: action.payload };
        case ADVERT_LOADED_SUCCES:
        case ADVERTS_CREATED_SUCCES:
            return {...advertsState, data: [...advertsState.data, action.payload] }
        default:
            return advertsState;
    }
};

export function ui(uiState = defaultState.ui, action) {
    switch (action.type) {
        case AUTH_LOGIN_REQUEST:
            return { isLoading: true, error: null };
        case AUTH_LOGIN_SUCCES:
        case ADVERTS_LOADED_SUCCES:
            return {isLoading: false, error:null }
        case AUTH_LOGIN_FAILURE:
            return { isLoading: false, error: action.payload }
        case UI_RESET_ERROR:
            return{...uiState, error:null}
        default:
            return uiState;
    }
};


