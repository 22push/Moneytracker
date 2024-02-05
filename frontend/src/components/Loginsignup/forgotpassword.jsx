import React from 'react';
import styles from './forgotpassword.module.css';
import img from './../../assets/loginimage.jpg';
const Forgotpassword = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
      
        <img src={img} alt="Signup Page Image" />
      </div>
      <div className={styles.signupContainer}>
        <div className={styles.signupContainer1}>
        <h2>Forgot Password</h2>
        <form>
          {/* Your form fields go here */}
          <label htmlFor="username" >email id</label>
          <input type="text" id="username" name="username" placeholder='enter your email' />
          <button className={styles.customButton}>Enter</button>
        </form>
        </div>
      </div>
    </div>
  );
};

export default Forgotpassword;
