import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <form>
        <h3>Login</h3>

        <div className='form-group'>
          <label>E-mail</label>
          <input type='email' className='form-control' placeholder='Email'/>
        </div>

        <div>
          <lavel>Password</lavel>
          <input type='password' className='form-control'placeholder='Password'/>
        </div>

        <button type='submit' className='btn btn-primary btn-block'>Logar</button>

        <p className='forgot-password text-right'>
          <a href='#'>Esqueceu a senha</a>
        </p>

      </form>
    );
  }
}

export default Login;