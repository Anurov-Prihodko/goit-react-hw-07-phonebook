import { useState } from 'react';
import { addContact } from '../../redux/phonebook';
import { useDispatch } from 'react-redux';
import s from './ContactForm.module.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addContact(name, number));
    setName('');
    setNumber('');
  };

  return (
    <form className={s.contactEditor} onSubmit={handleSubmit}>
      <label className={s.label}>
        Name
        <input
          value={name}
          onChange={handleChange}
          className={s.textarea}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label className={s.label}>
        Number
        <input
          value={number}
          onChange={handleChange}
          className={s.textarea}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>
      <button type="submit" className={s.button}>
        Add contact
      </button>
    </form>
  );
}

// ===== With connect ======

// ContactForm.propTypes = {
//   addContact: PropTypes.func.isRequired,
// };

// const mapDispatchToProps = dispatch => ({
//   addContact: (name, number) => dispatch(addContact(name, number)),
// });

// export default connect(null, mapDispatchToProps)(ContactForm);
