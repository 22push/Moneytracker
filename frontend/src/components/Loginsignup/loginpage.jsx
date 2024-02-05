import React from 'react';
import styles from './login.module.css';
import img from './../../assets/loginimage.jpg';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Google from './../../UI/google.tsx'
const Loginpage1 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
      
        <img src={img} alt="Signup Page Image" />
      </div>
      <div className={styles.signupContainer}>
        <div className={styles.signupContainer1}>
        <h2>Login</h2>
        <form>
          {/* Your form fields go here */}
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
          <li>forgot password??</li>
          <button className={styles.customButton}>Login</button>
        </form>
        </div>
      </div>
    </div>
  );
};

export default Loginpage1;
