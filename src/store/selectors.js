export const getUser = state => state.user

export const getAdverts = state => state.adverts

export const getTags = state => state.tags

export const getSession = state => getUser(state).token

export const getUi = state => state.ui

export const isUserRegistered = state => {
  const session = getSession(state)
  return !!session
}

export const getAdvert = state => getAdverts(state).advertById

export const getUpdatedAdvert = state => getAdverts(state).advertUpdated

export const getCreatedAdvert = state => getAdverts(state).advertCreated
