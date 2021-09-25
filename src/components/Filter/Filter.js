import React from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.css';
import { connect } from 'react-redux';
import { changeFilter } from '../../redux/phonebook/contacts-actions';
import { getFilter } from '../../redux/phonebook/contacts-selectors';

const Filter = ({ value, onChange }) => (
  <label className={s.label}>
    Find contacts by name
    <input type="text" className={s.text} value={value} onChange={onChange} />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
