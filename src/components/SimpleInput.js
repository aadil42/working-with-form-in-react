import {useState} from "react";

const SimpleInput = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isInputTouched, setIsInputTouched] = useState(false);

  const enteredNameIsValid = enteredValue.trim() !== ''; 
  const isInvalid = (!enteredNameIsValid && isInputTouched) ? true : false;
  const formClass = (isInvalid) ? 'form-control invalid' : 'form-control';

  const changeHandler = (e) => {
    setEnteredValue(e.target.value);
  }
  
  const blurHandler = () => {
    setIsInputTouched(true);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    setIsInputTouched(true);
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
        <input onBlur={blurHandler} onChange={changeHandler} value={enteredValue} type='text' id='name' />
        {isInvalid && <p className="error-text">input field must not be empty!</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
