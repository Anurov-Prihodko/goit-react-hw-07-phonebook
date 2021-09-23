import { createAction } from '@reduxjs/toolkit';

const addContactRequest = createAction('mainState/addContactRequest');
const addContactSuccess = createAction('mainState/addContactSuccess');
const addContactError = createAction('mainState/addContactError');

// const addContact = createAction('phonebook/add', (name, number) => ({
//   payload: {
//     id: shortid.generate(),
//     name,
//     number,
//     completed: false,
//   },
// }));

const deleteContact = createAction('phonebook/delete');
const changeFilter = createAction('phonebook/changeFilter');
const toggleCompleted = createAction('phonebook/toggleCompleted');

export {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContact,
  changeFilter,
  toggleCompleted,
};

// ===== БЕЗ БИБЛИОТЕКИ TOOLKIT =====

// const addContact = (name, number) => ({
//   type: ADD,
//   payload: {
//     id: shortid.generate(),
//     name,
//     number,
//     completed: false,
//   },
// });

// const deleteContact = contactId => ({
//   type: DELETE,
//   payload: contactId,
// });

// const changeFilter = value => ({
//   type: CHANGE_FILTER,
//   payload: value,
// });

// const toggleCompleted = contactId => ({
//   type: TOGGLE_COMPLETED,
//   payload: contactId,
// });
