import React from 'react';
import styles from './mainmid.module.css';

const Midpage = () => {
  return (
    <div className={styles.centeredcontainer}>
      <h1 className={styles.heading}>Manage Personal Finances</h1>
      <p className={styles.description}>Track expenses, set budgets, achieve financial goals.</p>
      <button className={styles.customButton}>
      Try it now
    </button>
    </div>
  );
};

export default Midpage;
