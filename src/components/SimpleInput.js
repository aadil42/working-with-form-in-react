import {useState} from "react";

const SimpleInput = (props) => {

  // for name/text
  const [enteredValue, setEnteredValue] = useState('');
  const [isInputTouched, setIsInputTouched] = useState(false);
  const [isButtonTouched, setIsButtonTouched] = useState(false);

  const enteredNameIsValid = enteredValue.trim() !== ''; 
  const isInvalid = (!enteredNameIsValid && isInputTouched) ? true : false;

  // for email
  const [enteredEmail, setEnteredEmail] = useState('');


  // cheking overall form.
  const formClass = (isInvalid) ? 'form-control invalid' : 'form-control';

  let isFormValid = false;

  if(enteredNameIsValid) {
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
  
  const blurHandler = () => {
    setIsInputTouched(true);
    setIsButtonTouched(true);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    setIsInputTouched(true);
    setIsButtonTouched(true);
    // now we don't even need to check this condition, because we're not allowing user to even submit if the field is empty. so this function will never run on an empty field
    if(!enteredNameIsValid) return; // we are not checking isInvalid because react schedules the states changes and we won't have the latest value for invalid.
    // true we are changing isTouched state above but we won't have the latest invalid at this point
    console.log('success');
    setEnteredValue('');
    setIsInputTouched(false);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={formClass}>
        <label htmlFor='name'>Your Name</label>
        <input 
        onBlur={blurHandler} 
        onChange={changeHandler} 
        value={enteredValue} 
        type='text' 
        id='name' />
        {isInvalid && <p className="error-text">input field must not be empty!</p>}
      </div>
      <div className={formClass}>
        <label htmlFor='email'>Your Email</label>
        <input 
        // onBlur={blurHandler} 
        onChange={changeHandler} 
        value={enteredEmail} 
        type='email' 
        id='email' />
        {/* {isInvalid && <p className="error-text">Enter a valid Email.</p>} */}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid && isButtonTouched}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
