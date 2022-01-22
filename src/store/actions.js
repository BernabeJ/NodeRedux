import { login } from "../components/auth/service";
import { ADVERTS_LOADED, AUTH_LOGIN_FAILURE, AUTH_LOGIN_REQUEST, AUTH_LOGIN_SUCCES, AUTH_LOGOUT } from "./types";

export function authLoginRequest() {
    return {
        type: AUTH_LOGIN_REQUEST,
    };
}
export function authLoginSucces() {
    return {
        type: AUTH_LOGIN_SUCCES,
    };
}

export function authLoginFailure(error) {
    return {
        type: AUTH_LOGIN_FAILURE,
        error: true,
        payload: error,
    };
}


export function authLogout() {
    return {
        type: AUTH_LOGOUT,
    };
};

export function authLogin(credentials, history, location,saveValue) {
    return async function (dispatch, getState, {api}) {
        dispatch(authLoginRequest());
        try {
            await api.auth.login(credentials, saveValue)
            dispatch(authLoginSucces());
            const { from } = location.state || { from: { pathname: '/' } };
            history.replace(from)
        } catch (error) {
            dispatch(authLoginFailure(error));
        }
    }
}

export function advertsLoaded(adverts) {
    return {
        type: ADVERTS_LOADED,
        payload: adverts,
    };
}