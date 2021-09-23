import axios from 'axios';
// import shortid from 'shortid';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
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

export { addContact };
