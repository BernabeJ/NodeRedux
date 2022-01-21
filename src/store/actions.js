import { AUTH_LOGIN, AUTH_LOGOUT } from "./types";

export function authLogin() {
    return {
        type: AUTH_LOGIN,
    };
}

export function authLogout() {
    return {
        type: AUTH_LOGOUT,
    };
}