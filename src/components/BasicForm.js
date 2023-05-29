import {useState} from 'react';
import SimpleInput2 from './SimpleInput2';

// import custom hooks
import useInput from './custom-hooks-2/useInput';

const BasicForm = (props) => {
  // for the submit button

  const [isSubmitTouched, setIsSubmitTouched] = useState(false);


  // for name input
  const validateName = (name) => {
    return name.trim() !== '';
  }

  const {
    setInput: setNameInput,
    input: nameInput,
    isInputValid: nameValid,
    setIsTouched: setNameIsTouched,
    inputError: nameError,
    inputClass: nameClass
  } = useInput(validateName);

  const nameBlur = (e) => {
    setNameIsTouched(true);
    setIsSubmitTouched(true);
  }
  const nameChange = (e) => {
    setNameInput(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    setIsSubmitTouched(true);
    setNameIsTouched(true);
  }

  let formisValid = false;
  if(nameValid) {
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
      {/* <SimpleInput2 
        label="Address"
        inputIsfor="address"
        type="text"
        id="address"
        /> */}
      </div>

      <div className='form-actions'>
        <button disabled={isSubmitTouched && !formisValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
