import React from 'react';
import '../../styles/Login.scss';
import { Link } from 'react-router-dom';
import lslogo from './images/LS_logo.svg';
import lspic from './images/side_img.svg';

const Login = () => {
  return (
    <div className='login_container'>

      <div className='left_content'>

        <img src={lslogo} 
        alt='Lendsqr logo' 
        id='logo' />

        <img src={lspic} 
        alt='Lendsqr pic' />

      </div>

      <form method='GET' className='form_container'>

        <h1>Welcome!</h1>
        <h4>Enter details to login.</h4>

        <div className='form_content'>
          <input type='email' placeholder='Email' id='email' />
        </div>

        <div className='form_content'>
          <input type='password' placeholder='Password' id='password' />
        </div>

        <Link to='/' id='forgot_password'>
          FORGOT PASSWORD?
        </Link>

        <div className='button_content'>
          <button type='submit' id='button_submit'>
            LOG IN
          </button>
        </div>

      </form>
      
    </div>
  )
}

export default Login