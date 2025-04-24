import React from 'react';
import "./Login.css";
import { Link } from 'react-router-dom'; // Import the Link component

const Login1 = () => {
  return (
    <div>
      <div className="nav__logo">
        <i className="ri-service-line"></i>
        Docc<span>App</span>
      </div>
      <div className="container">
        <form className="login__form">
          <h1>Login</h1>
          <div className="input__row">
            <span>
              <i className="ri-user-3-line"></i>
            </span>
            <div className="input__group">
              <input type="text" placeholder=" " id="userId" />
              <label htmlFor="userId">User id</label>
            </div>
          </div>
          <div className="input__row">
            <span>
              <i className="ri-lock-2-line"></i>
            </span>
            <div className="input__group">
              <input id="password" type="password" placeholder=" " />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div className="action__btns">
            <Link to="/forgot-password" className="forgot__password"> {/* Use Link here */}
              Forgot Password?
            </Link>
          </div>
          <br />
          <button type="submit" className="login__btn">
            Login
          </button>
          <div className="register">
            Don't have an account? <Link to="/register">Register</Link> {/* Use Link here */}
          </div>
        </form>
      </div>
      <div className="footer__bar">
        <div className="footer__bar__content">
          <p>Copyright © 2024 DOCC APP. All rights reserved.</p>
          <div className="footer__socials">
            <span>
              <i className="ri-instagram-line"></i>
            </span>
            <span>
              <i className="ri-facebook-fill"></i>
            </span>
            <span>
              <i className="ri-heart-fill"></i>
            </span>
            <span>
              <i className="ri-twitter-fill"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login1;