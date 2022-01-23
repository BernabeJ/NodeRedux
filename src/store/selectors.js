export const getIsLogged = state => state.auth;

export const getAdverts = state => state.adverts.data.sort((t1,t2)=>t2.createdAt.localeCompare(t1.createdAt));

export const areAdvertsLoaded = state => state.adverts.loaded;

export const getUi = state => state.ui;

export const getAdvert = (state, id) =>
    state.adverts.data.find((ad) => ad.id === id);
    