import React, { useState } from 'react';
import './Login.css'
import GoogleLogin from 'react-google-login';

// import { Container } from './styles';

export default function Login({ history }) {

  const [username, setUsername] = useState('');

  const responseGoogle = (response) => {
    console.log(response);
    history.push('/feed');
  }

  const responseGoogleF = (response) => {
    console.log(response);
  }


  function handleSubmit(e) {
    e.preventDefault();
    history.push('/feed');
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <form onSubmit={handleSubmit}>
          <h1>Se chegue, vá!</h1>
          <input
            type="text"
            placeholder="Digite seu usuário"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />

          <button type="submit">Entrar</button>

          <div className="divOr">
            <strong>OU</strong>
          </div>

          <GoogleLogin
            clientId="768613396327-ss4lc2nm4n1p0me8en05o97dbfuargia.apps.googleusercontent.com"
            buttonText="Entre com sua conta Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogleF}
            cookiePolicy={'single_host_origin'}
          />
        </form>
      </div>
    </div>
  );
};