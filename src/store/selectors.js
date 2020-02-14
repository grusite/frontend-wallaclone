export const getUser = state => state.user.token;

export const getAdverts = state => state.adverts;

export const getTags = state => state.tags;

export const getSession = state => getUser(state);

export const getUi = state => state.ui;

export const isUserRegistered = state => {
  const session = getSession(state);
  return !!session;
};

export const getAdvert = state => getAdverts(state).advertById;

export const getUpdatedAdvert = state => getAdverts(state).advertUpdated;

export const getCreatedAdvert = state => getAdverts(state).advertCreated;
