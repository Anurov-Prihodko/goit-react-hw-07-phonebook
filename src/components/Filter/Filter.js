import React from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.css';
import { connect, useSelector } from 'react-redux';
import { changeFilter, getFilter } from '../../redux/phonebook';

const Filter = ({ onChange }) => {
  const value = useSelector(getFilter);

  return (
    <label className={s.label}>
      Find contacts by name
      <input type="text" className={s.text} value={value} onChange={onChange} />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

// const mapStateToProps = state => ({
//   value: getFilter(state),
// });

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(changeFilter(e.target.value)),
});

export default connect(null, mapDispatchToProps)(Filter);
