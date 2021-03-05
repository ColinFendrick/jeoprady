import { useForm } from 'react-hook-form';
import { passwordRegex } from '../../helpers/regex';

const LoginForm = ({ onSubmit, loading, message }) => {
  const { register, handleSubmit, errors } = useForm({
    username: '', password: ''
  });

  return (
    < form onSubmit = {
      handleSubmit(onSubmit)
    } >

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
          disabled={loading}
          type='submit'>
          {loading && (
            <span className='spinner-border spinner-border-sm'></span>
          )}
          <span>Login</span>
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

export default LoginForm;
