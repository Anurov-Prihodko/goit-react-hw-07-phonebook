import axios from 'axios';
// import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:4040';

const addContact = (name, number) => dispatch => {
  const contact = [
    {
      // id: 1,
      name,
      number,
      completed: false,
    },
  ];

  dispatch({ type: 'mainState/addContactRequest' });

  axios
    .post('/mainState', contact)
    .then(resp =>
      dispatch({ type: 'mainState/addContactSuccess', payload: resp.data }),
    )
    .catch(error =>
      dispatch({ type: 'mainState/addContactError', payload: error }),
    );
};

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

export { addContact, deleteContact, changeFilter, toggleCompleted };

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
