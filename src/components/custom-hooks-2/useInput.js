import {useState} from 'react';


const useInput = (validate) => {

    const [input, setInput] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const isInputValid = validate(input);
    const inputError = (!isInputValid && isTouched) ? true : false;
    
    const inputClass = inputError ? 'form-control invalid' : 'form-control';

    return {
        setInput,
        input,
        isTouched,
        setIsTouched,
        isInputValid,
        inputError,
        inputClass
    }
}

export default useInput;