import React from 'react';
import './LoginSignup.css';
import user_icon from '../Assets/USER.png';
import email_icon from '../Assets/EMAIL.png';
import password_icon from '../Assets/PASSWORD.png';

const LoginSignup = () => { 
  return (
    
    <div className='container'>
      <div className="header">
        <div className="text">Sign Up</div> 
        <div className="underline"></div>
      </div>
      <form>
      <div className='inputs'>
        <div className="input">
          <img src={user_icon} alt="User Icon"/>
          <input type="text" placeholder="Username"/>
        </div>
        <div className='input'>
          <img src={email_icon} alt="Email Icon"/>
          <input type="email" placeholder="Email"/>
        </div>
        <div className='input'>
          <img src={password_icon} alt="Password Icon"/>
          <input type="password" placeholder="Password"/>
          <div className="forgot-password">Lost Password<span>Click Here</span></div>
          <div className="submit-continer">
            <div className="submit">Sign up</div>
            <div className="submit">Login</div>
          </div>
        </div>
      </div>
      </form>
    </div>
  );
}

export default LoginSignup;



