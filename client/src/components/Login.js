import React from 'react';
import '../styles/components/Login.scss'
import {Link} from 'react-router-dom';

export default function () {
  return (
    <div className='Login'>
      <div className="sideA">
        <img src="assets/images/car-pro1.jpg" width="300px" alt="background" />
        <div className="overlay"></div>
        <div className='content'>
          <h1>Securi App</h1>
          <p>
            Securi App is an IOT and web based system 
            that has been developed with an aim to help 
            curb vehicle theft within the gated communities.
            Employing a 2-factor authentication, the system is
            able to guarantee safety of a Resident's vehicle.
          </p>
        </div>
        <span>&copy; Copyright 2022 | brownscode</span>
      </div> 

      <div className='sideB'>
        <h2>Welcome back!</h2>
        <span>Login to access your account</span>
        <form>
          <input type="text" placeholder='Enter your username'/>
          <input type="password" placeholder='Enter your password'/>
          <input type="submit" value="Login" />
          <span>Forgot your password?</span>
        </form>
        <span></span>
        <Link to="/register-user"><input type="button" value='Register Account' /></Link>
      </div>
    </div>
  )
}
