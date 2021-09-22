import React from 'react';
import { useSelector } from 'react-redux';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import s from './App.module.css';

function App() {
  const totalContactsCount = useSelector(
    state => state.mainState.contacts.length,
  );
  const completeContactsCount = useSelector(state =>
    state.mainState.contacts.reduce(
      (acc, contacts) => (contacts.completed ? acc + 1 : acc),
      0,
    ),
  );

  return (
    <div className={s.container}>
      <h1 className={s.mainTitle}>Phonebook</h1>
      <p className={s.text}>All contacts: {totalContactsCount}</p>
      <p className={s.text}>Number of selected: {completeContactsCount} </p>

      <ContactForm />
      <h2 className={s.mainTitle}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;

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
