import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

const InputText = ({ value, name, placeholder, handleOnChange, onEnter, isFirst, onlyNumber }) => {

  const onChange = (e) => {
    const { value } = e.target;
    handleOnChange(value, name);
  }

  const handleOnKeyDown = (e) => {
    if (e.keyCode === 13) {
      onEnter();
    }
  }

  return (
    <div className={`form__group ${isFirst ? '' : 'mt-2'}`}>
      <input
        type={onlyNumber ? "number" : "text"}
        value={value}
        className="form__field"
        placeholder={placeholder}
        onChange={onChange}
        onKeyDown={handleOnKeyDown}
      />
    </div>
  );
}

InputText.propTypes = {
  value: PropTypes.string,
  handleOnChange: PropTypes.func,
  onEnter: PropTypes.func
};

InputText.defaultProps = {
  value: '',
  handleOnChange: () => {},
  onEnter: () => {}
};

export default InputText;
