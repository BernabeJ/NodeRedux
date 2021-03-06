import client, { removeAuthorizationHeader, setAuthorizationHeader } from '../../api/client';
import storage from '../../utils/storage';

export const login = (credentials, saveValue) => {
    return client.post('api/auth/login', credentials).then(({ accessToken }) => {
        setAuthorizationHeader(accessToken);
        if (saveValue) {
            storage.set('auth', accessToken)
            console.log(saveValue, 'auth')
        }
    });
 
};



export const logout = () => Promise.resolve().then(() => {
    removeAuthorizationHeader()
    storage.remove('auth');
});
