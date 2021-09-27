import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
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

function App() {
  const totalContactsCount = useSelector(getContactsLength);
  const completeContactsCount = useSelector(getCompleteContactsCount);
  const isLoading = useSelector(getLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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

export default App;

// App.propTypes = {
//   fetchContacts: PropTypes.func.isRequired,
// };

// const mapStateToProps = state => ({
//   isLoading: getLoading(state),
// });

// const mapDispatchToProps = dispatch => ({
//   fetchContacts: () => dispatch(fetchContacts()),
// });

// export default connect(null, mapDispatchToProps)(App);

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
