import {useRef, useState, useEffect} from "react";

const SimpleInput = (props) => {

  // const inputRef = useRef();
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isInputTouched, setIsInputTouched] = useState(false);

  const changeHandler = (e) => {
    setEnteredValue(e.target.value);
  }

  // if input is valid then sending it off to the server (simulating it, there's no real server).
  useEffect(() => {
    if(isValid) {
      // seding it to server
      console.log('sending to server');
    }
  },[isValid]);
  
  const submitHandler = (event) => {
    event.preventDefault();
    setIsInputTouched(true);
    if(!enteredValue) {
      setIsValid(false);
      return;
    }
    setIsValid(true);
    console.log('success');
  }

  const formClass = (!isValid && isInputTouched) ? 'form-control invalid' : 'form-control';
  return (
    <form onSubmit={submitHandler}>
      <div className={formClass}>
        <label htmlFor='name'>Your Name</label>
        <input onChange={changeHandler} value={enteredValue} type='text' id='name' />
        {!isValid && isInputTouched && <p className="error-text">input field must not be empty!</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
