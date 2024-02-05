import React from 'react';
import styles from './login.module.css';
import img from './../../assets/loginimage.jpg';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
const Loginpage1 = () => {
  const username = useRef();
    const password = useRef();
    const navigate = useNavigate();
    const loginhandle = async (e)=>{
      e.preventDefault();
      const formdata = {
          username: username.current.value,
          password: password.current.value,
      }
      const option = {
        headers: {
          "student-signup": "application/json",
        }
      }
      const body = {
        username: formdata.username,
        password: formdata.password
      };
      console.log(body);
      try {
        const response = await axios.post('http://localhost:8000/user/login', body)
        if(response.status === 200) {
          console.log('Form submitted:', response.data.user._id);
          localStorage.setItem('token', response.data.token);
          localStorage.setItem("userid",  response.data.user._id);
          username.current.value = '';
          password.current.value = '';
        }
        navigate('/showexpenses');
    }
    catch (e) {
          console.log(e.response)
    }
    }
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
          <input type="text" id="username" name="username"  ref={username}/>

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" ref={password} />
          <li>forgot password??</li>
          <button className={styles.customButton} onClick={loginhandle}>Login</button>
        </form>
        </div>
      </div>
    </div>
  );
};

export default Loginpage1;
