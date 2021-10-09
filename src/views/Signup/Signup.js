import { useMutation } from 'react-query';
import { useHistory } from 'react-router-dom';

import AuthService from '../../services/AuthService';
import useAppContext from '../../hooks/useAppContext';
import { SignupForm } from '../../components';

const Signup = () => {
  const history = useHistory();
  const { setAppState } = useAppContext();

  const { mutate: handleSignup, isLoading, error } = useMutation(
    formData => AuthService.register(formData),
    {
      onSuccess: ({ data }) => {
        setAppState(state => ({ ...state, user: data.data }));
        history.push('/home');
      }
    }
  );

  return (
    <div className='col-md-12'>
      <div className='card card-container'>
        <SignupForm onSubmit={handleSignup} message={error?.message} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default Signup;
