import { useForm } from 'react-hook-form';

const AddPlayerForm = ({ onSubmit, isLoading }) => {
  const { register, handleSubmit, errors } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <div className='form-group'>
        <label htmlFor='username'>Username</label>
        <input
          type='text'
          className='form-control'
          id='username'
          ref={register({ required: true })}
          defaultValue=''
          name='username' />
        {errors.username && 'Username is required'}
      </div>

      <div className='form-group'>
        <button
          className='btn btn-primary btn-block'
          disabled={isLoading}
          type='submit'>
          {isLoading && (
            <span className='spinner-border spinner-border-sm'></span>
          )}
          <span>Add Player</span>
        </button>
      </div>

    </form>
  );
};

export default AddPlayerForm;
