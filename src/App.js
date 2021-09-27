import { connect, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import s from './App.module.css';
import Spinner from './components/Spinner/Spinner';
import {
  fetchContacts,
  getLoading,
  getContactsLength,
  getCompleteContactsCount,
} from './redux/phonebook';

function App({ fetchContacts, isLoading }) {
  const totalContactsCount = useSelector(getContactsLength);
  const completeContactsCount = useSelector(getCompleteContactsCount);

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  return (
    <div className={s.container}>
      <h1 className={s.mainTitle}>Phonebook</h1>
      <p className={s.text}>All contacts: {totalContactsCount}</p>
      <p className={s.text}>Number of selected: {completeContactsCount} </p>

      <ContactForm />
      <h2 className={s.mainTitle}>Contacts</h2>
      <Filter />
      {isLoading && <Spinner />}
      <ContactList />
    </div>
  );
}

App.propTypes = {
  fetchContacts: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isLoading: getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

// ===== ЧЕРЕЗ CONNECT =====

// App.propTypes = {
//   totalContactsCount: PropTypes.number.isRequired,
//   completeContactsCount: PropTypes.number.isRequired,
// };

// const mapStateToProps = state => {
//   return {
//     totalContactsCount: state.mainState.contacts.length,
//     completeContactsCount: state.mainState.contacts.reduce(
//       (acc, contacts) => (contacts.completed ? acc + 1 : acc),
//       0,
//     ),
//   };
// };
