import React, { useState, useRef } from 'react';
import styles from './addexpense.module.css';

const Addexpenses = () => {
    const amount = useRef();
    const amountfor = useRef();
    const place = useRef();
    const date = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        const formdata = {
            amount: amount.current.value,
            amountfor: amountfor.current.value,
            place: place.current.value,
            date: date.current.value,
        }
        console.log('Form submitted:', formdata);
        amount.current.value = '';
        amountfor.current.value = '';
        place.current.value = '';
        date.current.value = '';

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
