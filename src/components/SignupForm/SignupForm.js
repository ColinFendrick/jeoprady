import { useForm } from 'react-hook-form';

import { passwordRegex, emailRegex } from '../../helpers/regex';

const SignupForm = ({ onSubmit, isLoading, message }) => {
  const { register, handleSubmit, errors } = useForm();

  return (
    <form onSubmit={
      handleSubmit(onSubmit)
    }>

      <div className='form-group'>
        <label htmlFor='username'>Username</label>
        <input
          type='text'
          className='form-control'
          id='username'
          ref={register({ required: true })}
          defaultValue=''
          autoComplete='username'
          name='username' />
        {errors.username && 'Username is required'}
      </div>

      <div className='form-group'>
        <label htmlFor='email'>Email</label>
        <input
          type='text'
          className='form-control'
          id='email'
          ref={register({ required: true, pattern: emailRegex })}
          defaultValue=''
          autoComplete='email'
          name='email' />
        {errors.email?.type === 'required' && 'Email is required'}
        {errors.email?.type === 'pattern' && 'Not a valid email'}
      </div>

      <div className='form-group'>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          className='form-control'
          id='password'
          ref={register({ required: true, pattern: passwordRegex })}
          defaultValue=''
          autoComplete='current-password'
          name='password' />
        {errors.password?.type === 'required' &&
          'Your input is required'}
        {errors.password?.type === 'pattern' &&
          'Must be at least 8 characters, containing one special character'}
      </div>

      <div className='form-group'>
        <button
          className='btn btn-primary btn-block'
          disabled={isLoading}
          type='submit'>
          {isLoading && (
            <span className='spinner-border spinner-border-sm'></span>
          )}
          <span>Sign Up</span>
        </button>
      </div>

      {message && (
        <div className='form-group'>
          <div className='alert alert-danger' role='alert'>
            {message}
          </div>
        </div>
      )}

    </form>
  );
};

export default SignupForm;
