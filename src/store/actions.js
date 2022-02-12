import { login } from "../components/auth/service";
import { areAdvertsLoaded, getAdvert, getAdverts } from "./selectors";
import { ADVERTS_CREATED_SUCCES, ADVERTS_LOADED, ADVERTS_LOADED_SUCCES, ADVERT_DELETED_REQUEST, ADVERT_DELETED_SUCCESS, ADVERT_LOADED_SUCCES, AUTH_LOGIN_FAILURE, AUTH_LOGIN_REQUEST, AUTH_LOGIN_SUCCES, AUTH_LOGOUT, UI_RESET_ERROR } from "./types";

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

export function authLogin(credentials, saveValue) {
    return async function (dispatch, getState, {api, history}) {
        dispatch(authLoginRequest());
        try {
            await api.auth.login(credentials, saveValue )
            dispatch(authLoginSucces());
            const { from } = history.location.state || { from: { pathname: '/' } };
            history.replace(from)
        } catch (error) {
            dispatch(authLoginFailure(error));
        }
    }
}

export function advertsLoaded(adverts) {
    return {
        type: ADVERTS_LOADED_SUCCES,
        payload: adverts,
    };
};

export function loadAdverts() {
    return async function (dispatch, getState, { api }) {
        if (areAdvertsLoaded(getState())) {
            return;
        }
        try {
            const adverts = await api.adverts.getAllAdverts();
            dispatch(advertsLoaded(adverts));
        } catch (error) {
            
        }
    }
};

export function advertLoaded(advert) {
    return {
        type: ADVERT_LOADED_SUCCES,
        payload: advert,
    }
}

export function loadAdvert(advertId) {
    return async function (dispatch, getState, { api, history }) {
        const advert = getAdvert(getState(), advertId);
        if (advert) {
            return; 
        }
        try {
            const advert = await api.adverts.getAdverts(advertId);
            dispatch(advertLoaded(advert))
        } catch (error) {
            
        }
    }

    
}

export function advertCreated(advert) {
    return {
        type: ADVERTS_CREATED_SUCCES,
        payload: advert,
    }
}

export function createAdvert(advert) {
    return async function (dispatch, getState, { api, history }) {
        try {
            const createdAdvert = await api.adverts.createAdvert(advert);
            dispatch(advertCreated(createAdvert));
            history.push(`/adverts/${createdAdvert.id}`)
        } catch (error) {
            
        }
    }
}

export function uiResetError(){
    return {
        type: UI_RESET_ERROR
    };
}



export function advertDeletedRequest() {
  return {
    type: ADVERT_DELETED_REQUEST,
  };
}

export function adDeletedSuccess(ad) {
  return {
    type: ADVERT_DELETED_SUCCESS,
    payload: ad,
  };
}

export function advertDeletedFailure(error) {
  return {
    type: ADVERT_DELETED_SUCCESS,
    error: true,
    payload: error,
  };
}

export function advertDeleted(adId) {
  return async function (dispatch, getState, { api, history }) {
    dispatch(advertDeletedRequest());
    try {
      await api.adverts.deleteAdvert(adId);
      dispatch(adDeletedSuccess(adId));
      history.push(`/adverts`);
    } catch (error) {
      dispatch(advertDeletedFailure(error));
    }
  };
}
