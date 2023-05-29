import {useState, useMemo, useCallback} from 'react';
import SimpleInput2 from './SimpleInput2';

// import custom hooks
import useInput from './custom-hooks-2/useInput';

const BasicForm = (props) => {
  // for the submit button

  const [isSubmitTouched, setIsSubmitTouched] = useState(false);

  const validateText = (name) => {
    return name.trim() !== '';
  }
  
  // for name input
  const {
    setInput: setNameInput,
    input: nameInput,
    isInputValid: nameValid,
    setIsTouched: setNameIsTouched,
    inputError: nameError,
    inputClass: nameClass
  } = useInput(validateText);

  const nameBlur = () => {
    setNameIsTouched(true);
    setIsSubmitTouched(true);
  }
  const nameChange = (e) => {
    setNameInput(e.target.value);
  }

  // for email
  const emailRegex = useMemo(() => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/;   
  },[]);

  const validateEmailInput = useCallback((email) => {
    return emailRegex.test(email);
  }, [emailRegex]);

  const {
    setInput: setEmailInput,
    input: emailInput,
    isInputValid: emailValid,
    setIsTouched: setIsEmailTouched,
    inputError: emailError,
    inputClass: emailClass
  } = useInput(validateEmailInput);

  const emailChange = (e) => {
    setEmailInput(e.target.value);
  }

  const emailBlur = () => {
    setIsSubmitTouched(true);
    setIsEmailTouched(true);
  }

  // for address
  const {
    setInput: setAddress,
    input: addresVal,
    isInputValid: addressValid,
    setIsTouched: setIsAddressTouched,
    inputError: addressError,
    inputClass: addressClass
  } = useInput(validateText);

  const addressBlur = () => {
    setIsSubmitTouched(true);
    setIsAddressTouched(true);
  } 

  const addressChange = (e) => {
    setAddress(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    setIsSubmitTouched(true);
    setNameIsTouched(true);
    setIsEmailTouched(true);
    setIsAddressTouched(true);
  }

  let formisValid = false;
  if(nameValid && emailValid && addressValid) {
    formisValid = true;
  }

  return (
    <form onSubmit={submitHandler}>

      <div className='control-group'>
        <SimpleInput2 
        label="Name"
        inputIsfor="name"
        type="text"
        id="name"
        inputClass={nameClass}
        blur={nameBlur}
        change={nameChange}
        val={nameInput}
        error={nameError}
        />
      </div>

      <div className='form-control'>
      <SimpleInput2 
        label="Email"
        inputIsfor="email"
        type="email"
        id="email"
        inputClass={emailClass}
        blur={emailBlur}
        change={emailChange}
        val={emailInput}
        error={emailError}
        />
      </div>
      
      <div className='form-control'>
      <SimpleInput2 
        label="Address"
        inputIsfor="address"
        type="address"
        id="address"
        inputClass={addressClass}
        blur={addressBlur}
        change={addressChange}
        val={addresVal}
        error={addressError}
        />
      </div>

      <div className='form-actions'>
        <button disabled={isSubmitTouched && !formisValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
