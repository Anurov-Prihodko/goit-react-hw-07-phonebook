import { createSelector } from '@reduxjs/toolkit';

const getAllConatcts = state => state.mainState.contacts;

// ===== used in App.js =====
export const getLoading = state => state.mainState.loading;
export const getContactsLength = state => state.mainState.contacts.length;
export const getCompleteContactsCount = createSelector(
  [getAllConatcts],
  allContacts =>
    allContacts.reduce(
      (acc, contacts) => (contacts.completed ? acc + 1 : acc),
      0,
    ),
);

// ===== used in Filter.js =====
export const getFilter = state => state.mainState.filter;

// ===== used in ContactList.js =====
export const getVisibleContacts = createSelector(
  [getAllConatcts, getFilter],

  (allContacts, filter) => {
    const normalizedFilter = filter.toLowerCase().trim();

    return allContacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  },
);

// ===== Без мемоизации =====
// export const getVisibleContacts = state => {
//   const allContacts = getAllConatcts(state);
//   const filter = getFilter(state);
//   const normalizedFilter = filter.toLowerCase().trim();

//   return allContacts.filter(({ name }) =>
//     name.toLowerCase().includes(normalizedFilter),
//   );
// };
