// ===== used in App.js =====
export const getLoading = state => state.mainState.loading;

// ===== used in Filter.js =====
export const getFilter = state => state.mainState.filter;

// ===== used in ContactList.js =====
const getAllConatcts = state => state.mainState.contacts;

export const getVisibleContacts = state => {
  const allContacts = getAllConatcts(state);
  const filter = getFilter(state);
  const normalizedFilter = filter.toLowerCase().trim();

  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};
