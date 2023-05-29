import {useState} from 'react';

const useInput = (validateInput) => {

    const [enteredValue, setEnteredValue] = useState('');
    const [isInputTouched, setIsInputTouched] = useState(false);
  
    const enteredInputIsValid = validateInput(enteredValue);
    const inputError = (!enteredInputIsValid && isInputTouched) ? true : false;
    const inputClass = (inputError) ? 'form-control invalid' : 'form-control';
    
    return {
        enteredValue,
        isInputTouched,
        enteredInputIsValid,
        inputError,
        inputClass,
        setEnteredValue,
        setIsInputTouched
    }
}

export default useInput;