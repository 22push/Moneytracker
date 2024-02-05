
import React, { useState, useRef } from 'react';
import styles from './addexpense.module.css'; 

const Addmoney = () => {
    const amount = useRef();
    const date = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        const formdata = {
            amount: amount.current.value,
            date: date.current.value,
        }
        console.log('Form submitted:', formdata);
        amount.current.value = '';
        date.current.value = '';

    };

    return (
        <div className={styles.formContainer}>
            <h2 className={styles.heading}>Add Your Money</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Total Amount
                    <input
                        type="Number"
                        ref={amount}
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

export default Addmoney;
