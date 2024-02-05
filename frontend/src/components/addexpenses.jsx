import React, { useState, useRef } from 'react';
import styles from './addexpense.module.css';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
const Addexpenses = () => {
    const userId = localStorage.getItem('userid')
    const amount = useRef();
    const amountfor = useRef();
    const place = useRef();
    const date = useRef();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formdata = {
            amount: amount.current.value,
            amountfor: amountfor.current.value,
            place: place.current.value,
            date: date.current.value,
        }
        const option = {
            headers: {
              "student-signup": "application/json",
            }
          }
          if(formdata.amount==='' || formdata.amountfor==='' || formdata.place==='' || formdata.date=== ''){
            window.alert("please enter all fields")
            return;
          }
          const body = {
            amount: formdata.amount,
            amountfor: formdata.amountfor,
            place: formdata.place,
            date: formdata.date
          };
          console.log(body);
        try{
            console.log(`http://localhost:8000/user/:${userId}/addexpense`)
            const response = await axios.post(`http://localhost:8000/user/${userId}/addexpense`, body)
            if(response.status === 200) {
                console.log('Form submitted:', response.data.user.expenses);
                amount.current.value = '';
                amountfor.current.value = '';
                place.current.value = '';
                date.current.value = '';
              }
        }   
        catch(e){
            console.log(e.response)
        }

    };

    return (
        <div className={styles.formContainer}>
            <h2 className={styles.heading}>Add Your Expenses</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Total Amount
                    <input
                        type="Number"
                        ref={amount}
                        min="1"
                    />
                </label>
                <label>
                    Amount for
                    <input
                        type="text"
                        name="lastName"
                        ref={amountfor}
                    />
                </label>
                <label>
                    Place
                    <input
                        type="text"
                        name="lastName"
                        ref={place}
                    />
                </label>
                <label>
                    Date
                    <input
                        type="date"
                        name="email"
                        ref={date}
                    />
                </label>
                <button type="submit" className={styles.submitButton}>
                    Add Expense
                </button>
            </form>
        </div>
    );
};

export default Addexpenses;
