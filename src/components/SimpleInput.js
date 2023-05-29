import {useState, useCallback, useMemo} from "react";

// getting custom hooks
import useInput from './custom-hooks/useInput';

const SimpleInput = (props) => {
  const [isButtonTouched, setIsButtonTouched] = useState(false);

  // using custom hooks
  // for text/name input
  const validateTextInput = (input) => {
    return input.trim() !== '';
  }
  const {
    enteredValue : nameInput,
    // isInputTouched : nameInputTouched,
    enteredInputIsValid : nameInputIsValid,
    inputError : nameInputError,
    inputClass : nameInputClass,
    setEnteredValue : setName,
    setIsInputTouched : setNameTouched
  } = useInput(validateTextInput);

  // for email
  const emailRegex = useMemo(() => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/;   
  },[]);

  const validateEmailInput = useCallback((email) => {
    return emailRegex.test(email);
  }, [emailRegex]);

  const {
    enteredValue : emailInput,
    // isInputTouched : nameInputTouched,
    enteredInputIsValid : emailInputIsValid,
    inputError : emailInputError,
    inputClass : emailInputClass,
    setEnteredValue : setEmail,
    setIsInputTouched : setEmailTouched
  } = useInput(validateEmailInput);

  // state handlers.
  const emailChange = (e) => {
    setEmail(e.target.value);
  }
  const emailBlur = () => {
    setEmailTouched(true);
    setIsButtonTouched(true);
  }

  const nameChange = (e) => {
    setName(e.target.value);
  }
  const nameBlur = (e) => {
    setNameTouched(true);
    setIsButtonTouched(true);
  }

  // for overall form.
  let isFormValid = false;
  if(nameInputIsValid && emailInputIsValid) {
    isFormValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();
    setEmailTouched(true);
    setNameTouched(true);
    setIsButtonTouched(true);
    if(!nameInputIsValid || !emailInputIsValid) return; // we are not checking isInvalid because react schedules the states changes and we won't have the latest value for invalid.
    // true we are changing isTouched state above but we won't have the latest invalid at this point
    console.log('success');
    setEmail('');
    setEmailTouched(false);
    setName('');
    setNameTouched(false);
    setIsButtonTouched(false);
  }
  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClass}>
        <label htmlFor='name'>Your Name</label>
        <input 
        onBlur={nameBlur} 
        onChange={nameChange} 
        value={nameInput} 
        type='text' 
        id='name' />
        {nameInputError && <p className="error-text">input field must not be empty!</p>}
      </div>
      <div className={emailInputClass}>
        <label htmlFor='email'>Your Email</label>
        <input 
        onBlur={emailBlur} 
        onChange={emailChange} 
        value={emailInput} 
        type='email' 
        id='email' />
        {emailInputError && <p className="error-text">Enter a valid Email.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid && isButtonTouched}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
