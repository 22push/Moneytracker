import React from 'react';
import styles from './signup.module.css';
import img from './../../assets/loginimage.jpg';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Google from './../../UI/google.tsx'
import {Link }  from 'react-router-dom';
const SignupPage1 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
      
        <img src={img} alt="Signup Page Image" />
      </div>
      <div className={styles.signupContainer}>
        <div className={styles.signupContainer1}>
        <h2>Sign Up</h2>
        <form>
          {/* Your form fields go here */}
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
          <label htmlFor="username">Name:</label>
          <input type="text" id="name" name="name" />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />

          <button className={styles.customButton}>Sign up</button>
          <GoogleOAuthProvider clientId="792139111620-baqoia3mr8328qi9ngvbhfv440jejf9v.apps.googleusercontent.com">
          <Google />
        </GoogleOAuthProvider>
        </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage1;
