import React from 'react';
import classNames from 'classnames';
import s from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  deleteContact,
  toggleCompleted,
  getVisibleContacts,
} from '../../redux/phonebook';

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number, completed }) => (
        <li
          key={id}
          className={classNames(s.item, { [s.completed]: completed })}
        >
          <input
            type="checkbox"
            className={s.checkbox}
            checked={completed}
            onChange={() =>
              dispatch(toggleCompleted({ id, completed: !completed }))
            }
          />
          <p className={s.text}>
            {name}: {number}
          </p>
          <button
            type="button"
            className={s.pug}
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

// ===== Без селекторов =====

// const getVisibleContacts = (allContacts, filter) => {
//   const normalizedFilter = filter.toLowerCase().trim();

//   return allContacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter),
//   );
// };

// const mapStateToProps = state => ({
//   contacts: getVisibleContacts(state),
// });

// const mapDispatchToProps = dispatch => ({
//   onDeleteContact: contactId => dispatch(deleteContact(contactId)),
// });

// export default connect(null, mapDispatchToProps)(ContactList);
