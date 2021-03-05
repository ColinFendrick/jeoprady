import React, { useState } from 'react';

import AuthService from '../services/AuthService';
import { LoginForm } from '../../components';

const Login = props => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleLogin = async data => {
    setMessage('');
    setLoading(true);

    try {
      const res = await AuthService.login(data);
      if (res.status === 404) {
        setMessage(res.data.message);
        setLoading(false);
      } else {
        props.history.push('/main');
        window.location.reload();
      }
    } catch (e) {
      const resMessage = e.response.data.message.toString() || 'An error has occured';
      setLoading(false);
      setMessage(resMessage);
    }
  };

  return (
    <div className='col-md-12'>
      <div className='card card-container'>

        <LoginForm onSubmit={handleLogin} message={message} loading={loading} />
      </div>
    </div>
  );
};

export default Login;
