import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  changeFilter,
  toggleCompleted,
} from './phonebook-actions';

const contactsArray = [
  {
    id: '',
    name: '',
    number: '',
    completed: false,
  },
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
  state.map(contact =>
    contact.id === payload
      ? { ...contact, completed: !contact.completed }
      : contact,
  );

const contacts = createReducer(contactsArray, {
  [addContact]: addContactReducer,
  [deleteContact]: deleteContactReducer,
  [toggleCompleted]: toggleCompletedReducer,
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts,
  filter,
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
