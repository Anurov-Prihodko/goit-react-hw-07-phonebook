import axios from 'axios';
// import shortid from 'shortid';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from './phonebook-actions';

axios.defaults.baseURL = 'http://localhost:4040';

const addContact = (name, number) => dispatch => {
  const contact = {
    name,
    number,
    completed: false,
  };

  dispatch(addContactRequest());

  axios
    .post('/mainState', contact)
    .then(resp => dispatch(addContactSuccess(resp.data)))
    .catch(error => dispatch(addContactError(error)));
};

const deleteContact = contactId => dispatch => {
  dispatch(deleteContactRequest());

  axios
    .delete(`/mainState/${contactId}`)
    .then(() => dispatch(deleteContactSuccess(contactId)))
    .catch(error => dispatch(deleteContactError(error)));
};

export { addContact, deleteContact };
