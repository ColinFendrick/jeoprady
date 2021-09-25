import { useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useMutation } from 'react-query';

import AuthService from '../../services/AuthService';
import { LoginForm } from '../../components';

const Login = () => {
  const history = useHistory();
  const { mutate, isSuccess, isLoading, error } = useMutation(formData => AuthService.login(formData));

  useEffect(() => {
    if (isSuccess) {
      history.push('/main');
      window.location.reload();
    }
  }, [isSuccess, history]);

  const handleLogin = async data => mutate(data);

  return (
    <div className='col-md-12'>
      <div className='card card-container'>
        <LoginForm onSubmit={handleLogin} message={error?.message} isLoading={isLoading} />
      </div>

      <Link to='/register'>Click here to register</Link>
    </div>
  );
};

export default Login;
