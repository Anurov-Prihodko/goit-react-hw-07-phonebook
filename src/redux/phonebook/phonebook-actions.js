import { createAction } from '@reduxjs/toolkit';

const fetchContactsRequest = createAction('mainState/fetchContactsRequest');
const fetchContactsSuccess = createAction('mainState/fetchContactsSuccess');
const fetchContactsError = createAction('mainState/fetchContactsError');

const addContactRequest = createAction('mainState/addContactRequest');
const addContactSuccess = createAction('mainState/addContactSuccess');
const addContactError = createAction('mainState/addContactError');

const deleteContactRequest = createAction('mainState/deleteContactRequest');
const deleteContactSuccess = createAction('mainState/deleteContactSuccess');
const deleteContactError = createAction('mainState/deleteContactError');

const toggleCompletedRequest = createAction('mainState/toggleCompletedRequest');
const toggleCompletedSuccess = createAction('mainState/toggleCompletedSuccess');
const toggleCompletedError = createAction('mainState/toggleCompletedError');

// ===== Без json-server =====

// const addContact = createAction('phonebook/add', (name, number) => ({
//   payload: {
//     id: shortid.generate(),
//     name,
//     number,
//     completed: false,
//   },
// }));

// const deleteContact = createAction('phonebook/delete');
// const toggleCompleted = createAction('phonebook/toggleCompleted');

const changeFilter = createAction('phonebook/changeFilter');

export {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  changeFilter,
  toggleCompletedRequest,
  toggleCompletedSuccess,
  toggleCompletedError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
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
