import { useHistory, Link } from 'react-router-dom';
import { useMutation } from 'react-query';

import AuthService from '../../services/AuthService';
import useAppContext from '../../hooks/useAppContext';
import { LoginForm } from '../../components';

const Login = () => {
  const history = useHistory();
  const { setAppState } = useAppContext();
  const { mutate, isLoading, error } = useMutation(
    formData => AuthService.login(formData),
    {
      onSuccess: ({ data }) => {
        setAppState(state => ({ ...state, user: data.data }));
        history.push('/home');
      }
    }
  );

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
