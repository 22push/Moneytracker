import React, { useState, useEffect } from 'react';
import styles from './showexpensesStyles.module.css';
import Addexpenses from './addexpenses';
import Addmoney from './addmoney';
import axios from 'axios';

const Showexpenses = () => {
  const userid = localStorage.getItem('userid');
  const [showaddexpenses, setshowaddexpenses] = useState(false);
  const [showaddmoney, setshowaddmoney] = useState(false);
  const [items, setItems] = useState([]);
  let totalamount = 0;

  function Addyourexpenses() {
    setshowaddexpenses(true);
    setshowaddmoney(false);
  }

  function Addyourmoney() {
    setshowaddmoney(true);
    setshowaddexpenses(false);
  }

  const totalexpense = (array) => {

  
    for (let index = 0; index < array.length; index++) {
        if(array[index].amount===''){
            array[index].amount = 0;
        }
      const amount = parseFloat(array[index].amount);
      totalamount += amount;
    }
  
    return totalamount;
  };
  

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/user/${userid}`);
        setItems(response.data.userdata.expenses);
        console.log(response.data.userdata.expenses);
      } catch (err) {
        console.log(err);
      }
    };

    fetchdata();
  }, []);

  return (
    <>
      <button className={styles.customButton} onClick={Addyourexpenses}>
        Add Expenses
      </button>
      {showaddexpenses ? <Addexpenses /> : ''}
      {showaddmoney ? <Addmoney /> : ''}
      <div className={styles.tableContainer}>
        <h2 className={styles.heading}>Your Expenses</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Amount</th>
              <th>Amount for</th>
              <th>Place</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={item.expenseId}>
                <td>{index + 1}</td>
                <td>Rs {item.amount}</td>
                <td>{item.amountfor}</td>
                <td>{item.place}</td>
                <td>{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2 className={styles.totalamount}>Total amount :- {totalexpense(items)}</h2>
        <div>
          <button className={styles.customButton}>Delete all Expenses</button>
          <button className={styles.customButton} onClick={Addyourmoney}>
            Add Money
          </button>
        </div>
      </div>
    </>
  );
};

export default Showexpenses;
