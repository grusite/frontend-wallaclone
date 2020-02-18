export const getUser = state => state.user;

export const getAdverts = state => state.adverts;

export const getTags = state => state.tags;

export const getSession = state => getUser(state).token;

export const getUi = state => state.ui;

export const isUserRegistered = state => {
  const session = getSession(state);
  return !!session;
};

export const getAdvert = state => advertId =>
  getAdverts(state).find(advert => advert._id === advertId);
