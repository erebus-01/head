import React, { useState } from 'react'

interface InputItem {
  label: string,
  name: string
}

const InputText:React.FC<InputItem> = ({label, name}) => {
  const [countUser, setCountUser] = useState('');
  const [onUserFocus, setOnUserFocus] = useState(false)
  
  const handleCountUser = (event: any) => {
    setCountUser(event.target.value);
  }
  const handleOnUserFocus = () => {
    setOnUserFocus(!onUserFocus);
  }
  return (
    <div className={`field ${!onUserFocus ? '' : 'field-border'} field-animate`} >
      <div className="field__input field__input--animate">
        <input type="text" className={`field__form-input text__ignore-subset`} onBlur={handleOnUserFocus} onFocus={handleOnUserFocus} onChange={handleCountUser} name={name} autoCapitalize='off' id="" data-value={`${countUser !== '' ? 'value' : 'empty'}`} />
        <label htmlFor="" className="field__label">{label}</label>
        <span className="field__placeholder">{label}</span>
      </div>
    </div>
  )
}

export default InputText