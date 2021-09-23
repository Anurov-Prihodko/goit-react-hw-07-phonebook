import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4040';

const fetchContacts = () => {
  return axios.get('/mainState').then(resp => resp.data);
};

const addContact = contact => {
  return axios.post('/mainState', contact).then(({ data }) => data);
};

const deleteContact = contactId => {
  return axios.delete(`/mainState/${contactId}`);
};

const updateContact = (contactId, update) => {
  return axios
    .patch(`/mainState/${contactId}`, update)
    .then(({ data }) => data);
};

const contactsApi = { fetchContacts, addContact, deleteContact, updateContact };

export default contactsApi;
