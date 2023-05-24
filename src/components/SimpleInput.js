import {useRef, useState} from "react";

const SimpleInput = (props) => {

  // const inputRef = useRef();
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const changeHandler = (e) => {
    setEnteredValue(e.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    if(!enteredValue) {
      setIsValid(false);
      return;
    }
    setIsValid(true);
    console.log('success');
  }

  const formClass = isValid ? 'form-control' : 'form-control invalid';
  return (
    <form onSubmit={submitHandler}>
      <div className={formClass}>
        <label htmlFor='name'>Your Name</label>
        <input onChange={changeHandler} value={enteredValue} type='text' id='name' />
        {!isValid && <p className="error-text">input field must not be empty!</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
