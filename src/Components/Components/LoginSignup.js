import React from 'react';
import './LoginSignup.css';
import background from '../../assets/login.jpg';
import user_icon from '../../assets/Assets/USER.png';
import email_icon from '../../assets/Assets/EMAIL.png';
import password_icon from '../../assets/Assets/PASSWORD.png';
import { FaUser } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaLock } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const LoginSignup = () => { b
  const nav = useNavigate();

  const handleClick = (e) =>{
    e.preventDefault()
    alert("Button Clicked")
    nav('/');
  }
  return (
    
    <div id='login_page' className='container'>
      <img src={background}></img>
      <form>
      <div className='inputs'>
        <div className="text">Sign Up/Login</div> 
        <div className="input">
          <FaUser className='icon'/>
          <input type="text" placeholder="Username"/>
        </div>
        <div className='input'>
          <CiMail className='icon'/>
          <input type="email" placeholder="Email"/>
        </div>
        <div className='input'>
          <FaLock className='icon'/>
          <input type="password" placeholder="Password"/>
        </div>
          <a className="forgot-password">Lost Password<span>Click Here</span></a>
          <div className="submit-continer">
            <button className="submit" onClick={handleClick}>Sign up</button>
            <button className="submit" onClick={handleClick}>Login</button>
          </div>
        </div>
      
      </form>
    </div>
  );
}

export default LoginSignup;



