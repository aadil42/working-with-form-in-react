
import SimpleInput2 from './SimpleInput2';

const BasicForm = (props) => {
  return (
    <form>

      <div className='control-group'>
        <SimpleInput2 
        label="Name"
        inputIsfor="fdds"
        type="text"
        id="name"
        />
        <SimpleInput2 />
      </div>

      <div className='form-control'>
        <SimpleInput2 />
      </div>

      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
