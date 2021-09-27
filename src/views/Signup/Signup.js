import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import AuthService from '../../services/AuthService';
import { SignupForm } from '../../components';

const Signup = () => {
  const history = useHistory();
  const [isLoading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSignup = async data => {
    setMessage('');
    setLoading(true);

    try {
      const res = await AuthService.register(data);
      if (res.status === 404) {
        setMessage(res.data.message);
        setLoading(false);
      } else history.push('/home');

    } catch (e) {
      const resMessage = e.response.data.message.toString() || 'An error has occured';
      setLoading(false);
      setMessage(resMessage);
    }
  };

  return (
    <div className='col-md-12'>
      <div className='card card-container'>
        <SignupForm onSubmit={handleSignup} message={message} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default Signup;
