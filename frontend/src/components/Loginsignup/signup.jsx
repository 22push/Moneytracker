import React from 'react';
import styles from './signup.module.css';
import img from './../../assets/loginimage.jpg'
import { useRef } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
const SignupPage1 = () => {
  const username = useRef();
    const name = useRef();
    const emailid = useRef();
    const password = useRef();
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formdata = {
            username: username.current.value,
            name: name.current.value,
            emailid: emailid.current.value,
            password: password.current.value,
        }
        const option = {
          headers: {
            "student-signup": "application/json",
          }
        }
        const body = {
          username: formdata.username,
          name: formdata.name,
          emailid: formdata.emailid,
          password: formdata.password
        };
        try {
            const response = await axios.post(' http://localhost:8000/user', body)
            if(response.status === 200) {
              console.log('Form submitted:', formdata);
              username.current.value = '';
              name.current.value = '';
              emailid.current.value = '';
              password.current.value = '';
            }
            navigate('/login');
        }
        catch (e) {
              console.log(e.response.data.message);
              if(e.response.status === 400){
                console.log('------------------------------------')
                window.alert("username already in use")
              }
        }
    };
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
          <input type="text" id="username" name="username"  ref={username}/>
          <label htmlFor="username" >Name:</label>
          <input type="text" id="name" name="name" ref={name} />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email"  ref= {emailid}/>

          <label htmlFor="password" >Password:</label>
          <input type="password" id="password" name="password" ref={password}/>

          <button className={styles.customButton} onClick={handleSubmit}>Sign up</button>
        </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage1;
