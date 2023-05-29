// import {useState, useCallback, useMemo} from "react";
// getting custom hooks

const SimpleInput2 = (props) => {
  return (
    <div className='form-control'>
        <div /*className={nameInputClass} */>
            <label htmlFor={props.inputIsfor}>{props.label}</label>
            <input 
            // onBlur={nameBlur} 
            // onChange={nameChange} 
            // value={nameInput} 
            type={props.type} 
            id={props.id} />
            {/* {nameInputError && <p className="error-text">input field must not be empty!</p>} */}
        </div>
    </div>
  );
};

export default SimpleInput2;
