import React, { useState, useContext } from 'react';
import './Login.css'
import GoogleLogin from 'react-google-login';
import { AuthContext } from '../../contexts/auth';
import Logo from '../../images/logo.png';

export default function Login({ history }) {

  const [username, setUsername] = useState('');

  const { signin } = useContext(AuthContext);

  const responseGoogle = (response) => {
    var user = {};

    console.log(response.profileObj);

    user = {
      name: response.profileObj.name,
      email: response.profileObj.email,
      userName: response.profileObj.email,
    }

    login(user);
  }

  const responseGoogleF = (response) => {
    console.log(response);
  }

  function handleSubmit(e) {
    e.preventDefault();
    history.push('/feed');
  }

  function login(data) {
    signin(data);

    history.push('/feed');
  }

  return (
    <div className="login-box">
      <h1>Se chegue, vá!</h1>
      <form onSubmit={handleSubmit}>
        <div className="textbox">
          <i className="fas fa-user"></i>
          <input type="text" placeholder="Email" />
        </div>

        <div className="textbox">
          <i className="fas fa-lock"></i>
          <input type="password" placeholder="Senha" />
        </div>

        <input type="submit" className="btn" value="Entrar" />

        <div className="divOr">
          <strong>OU</strong>
        </div>

        <GoogleLogin
          className="btn"
          clientId="768613396327-ss4lc2nm4n1p0me8en05o97dbfuargia.apps.googleusercontent.com"
          buttonText="Casdastre-se com sua conta Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogleF}
          cookiePolicy={'single_host_origin'}
        />
      </form>
    </div>



















    // <div className="row">
    //   <div className="coll-md-8">
    //   <img src={Logo} alt="" width="500" />
    //   </div>
    //   <div className="container">
    //     <div className="login-container">
    //       <div className="login-box">

    //         <form onSubmit={handleSubmit}>
    //           <h1>Se chegue, vá!</h1>
    //           <input
    //             type="text"
    //             placeholder="Digite seu usuário"
    //             value={username}
    //             onChange={e => setUsername(e.target.value)}
    //           />

    //           <button type="submit">Entrar</button>

    //           <div className="divOr">
    //             <strong>OU</strong>
    //           </div>

    //           <GoogleLogin
    //             clientId="768613396327-ss4lc2nm4n1p0me8en05o97dbfuargia.apps.googleusercontent.com"
    //             buttonText="Entre com sua conta Google"
    //             onSuccess={responseGoogle}
    //             onFailure={responseGoogleF}
    //             cookiePolicy={'single_host_origin'}
    //           />
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};