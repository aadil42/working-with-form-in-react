// import {useState, useCallback, useMemo} from "react";
// getting custom hooks

const SimpleInput2 = (props) => {
  return (
    <div className='form-control'>
        <div className={props.inputClass} >
            <label htmlFor={props.inputIsfor}>{props.label}</label>
            <input 
            onBlur={props.blur} 
            onChange={props.change} 
            value={props.val} 
            type={props.type} 
            id={props.id} />
            {props.error && <p className="error-text">input field must not be empty!</p>}
        </div>
    </div>
  );
};

export default SimpleInput2;
