import React from 'react';

interface InputItem {
  label: string;
  name: string;
  form: { [key: string]: string };
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputText: React.FC<InputItem> = ({ label, name, form, onChange }) => {
  const onUserFocus = form[name] !== '';

  return (
    <div className={`field ${!onUserFocus ? '' : 'field-border'} field-animate`}>
      <div className="field__input field__input--animate">
        <input
          type="text"
          className={`field__form-input text__ignore-subset`}
          onBlur={onChange}
          onFocus={onChange}
          onChange={onChange}
          name={name}
          autoCapitalize="off"
          required
          id={name}
          value={form[name]}
          data-value={`${form[name] !== '' ? 'value' : 'empty'}`}
        />
        <label htmlFor="" className="field__label">
          {label}
        </label>
        <span className="field__placeholder">{label}</span>
      </div>
    </div>
  );
};

export default InputText;
