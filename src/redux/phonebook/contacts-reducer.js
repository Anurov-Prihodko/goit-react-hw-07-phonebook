import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
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
} from './contacts-actions';

const contactsArray = [
  // {
  //   id: '',
  //   name: '',
  //   number: '',
  //   completed: false,
  // },
];

const addContactReducer = (state, { payload }) => {
  if (state.find(({ name }) => name === payload.name)) {
    alert(`${payload.name} is already in contacts.`);
    return [...state];
  }
  return [...state, payload];
};

const deleteContactReducer = (state, { payload }) =>
  state.filter(({ id }) => id !== payload);

const toggleCompletedReducer = (state, { payload }) =>
  state.map(contact => (contact.id === payload.id ? payload : contact));

const contacts = createReducer(contactsArray, {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: addContactReducer,

  // ===== Не через функию =====

  //   (contactsArray, { payload }) => {
  //   if (contactsArray.find(({ name }) => name === payload.name)) {
  //     alert(`${payload.name} is already in contacts.`);
  //     return [...contactsArray];
  //   }
  //   return [...contactsArray, payload];
  // },

  [deleteContactSuccess]: deleteContactReducer,
  [toggleCompletedSuccess]: toggleCompletedReducer,
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
  [toggleCompletedRequest]: () => true,
  [toggleCompletedSuccess]: () => false,
  [toggleCompletedError]: () => false,
});

export default combineReducers({
  contacts,
  filter,
  loading,
});

// ===== БЕЗ БИБЛИОТЕКИ TOOLKIT =====

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case CHANGE_FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };

// const contacts = (state = contactsArray, { type, payload }) => {
//   switch (type) {
//     case ADD:
//       if (state.find(({ name }) => name === payload.name)) {
//         alert(`${payload.name} is already in contacts.`);
//         return [...state];
//       }
//       return [...state, payload];

//     case DELETE:
//       return state.filter(({ id }) => id !== payload);

//     case TOGGLE_COMPLETED:
//       return state.map(contact =>
//         contact.id === payload
//           ? { ...contact, completed: !contact.completed }
//           : contact,
//       );

//     default:
//       return state;
//   }
// };
