import {useState, useCallback} from "react";

const SimpleInput = (props) => {

  const [isButtonTouched, setIsButtonTouched] = useState(false);

  // for name/text
  const [enteredValue, setEnteredValue] = useState('');
  const [isInputTouched, setIsInputTouched] = useState(false);

  const enteredNameIsValid = enteredValue.trim() !== ''; 
  const isInvalid = (!enteredNameIsValid && isInputTouched) ? true : false;
  const inputClass = (isInvalid) ? 'form-control invalid' : 'form-control';

  // for email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateEmail = useCallback((email) => {
    return emailRegex.test(email);
  }, [emailRegex]);

  const [enteredEmail, setEnteredEmail] = useState('');
  const [isEmailTouched, setIsEmailTouched] = useState(false);

  const enteredEmailIsValid = validateEmail(enteredEmail);
  const isEmailInvalid = (!enteredEmailIsValid && isEmailTouched) ? true : false;
  const emailClass = (isEmailInvalid) ? 'form-control invalid' : 'form-control';


  // for overall form.
  let isFormValid = false;
  if(enteredNameIsValid && enteredEmailIsValid) {
    isFormValid = true;
  }

  // state handlers.
  const changeHandler = (e) => {

    if(e.target.id === 'email') {
      setEnteredEmail(e.target.value);
    }
    if(e.target.id === 'name') {
      setEnteredValue(e.target.value);
    }
  }
  
  const blurHandler = (e) => {
    if(e.target.id === 'name') {
      setIsInputTouched(true);
    }
    if(e.target.id === 'email') {
      setIsEmailTouched(true);
    }
    setIsButtonTouched(true);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    setIsInputTouched(true);
    setIsEmailTouched(true);
    setIsButtonTouched(true);
    if(!enteredNameIsValid || !enteredEmailIsValid) return; // we are not checking isInvalid because react schedules the states changes and we won't have the latest value for invalid.
    // true we are changing isTouched state above but we won't have the latest invalid at this point
    console.log('success');
    setEnteredEmail('');
    setIsEmailTouched(false);
    setEnteredValue('');
    setIsInputTouched(false);
    setIsButtonTouched(false);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={inputClass}>
        <label htmlFor='name'>Your Name</label>
        <input 
        onBlur={blurHandler} 
        onChange={changeHandler} 
        value={enteredValue} 
        type='text' 
        id='name' />
        {isInvalid && <p className="error-text">input field must not be empty!</p>}
      </div>
      <div className={emailClass}>
        <label htmlFor='email'>Your Email</label>
        <input 
        onBlur={blurHandler} 
        onChange={changeHandler} 
        value={enteredEmail} 
        type='email' 
        id='email' />
        {isEmailInvalid && <p className="error-text">Enter a valid Email.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid && isButtonTouched}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
