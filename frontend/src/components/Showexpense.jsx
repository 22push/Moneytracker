import React, { useState } from 'react';
import styles from './showexpensesStyles.module.css'; // Import your modular CSS file for styling
import Addexpenses from './addexpenses'
import Addmoney from './addmoney';
const Showexpenses = () => {
    const [showaddexpenses, setshowaddexpenses] = useState(false);
    const [showaddmoney, setshowaddmoney] = useState(false);
    function Addyourexpenses() {
        setshowaddexpenses(true);
        setshowaddmoney(false);
    }
    function Addyourmoney() {
        setshowaddmoney(true);
        setshowaddexpenses(false);
    }
    const items = [
        { id: 1, Amount: 3231, Amountfor: "dsfcxcvcx", Place: "qwedfcx", Date: "2024-01-18" },
        { id: 2, Amount: 3231, Amountfor: "dsfcxcvcx", Place: "qwedfcx", Date: "2024-01-18" },
        { id: 3, Amount: 3231, Amountfor: "dsfcxcvcx", Place: "qwedfcx", Date: "2024-01-18" },
        { id: 4, Amount: 3231, Amountfor: "dsfcxcvcx", Place: "qwedfcx", Date: "2024-01-18" },
        { id: 4, Amount: 3231, Amountfor: "dsfcxcvcx", Place: "qwedfcx", Date: "2024-01-18" },
    ];
    let totalalamount = 0;
    for (let index = 0; index < items.length; index++) {
        totalalamount += items[index].Amount;
    }
    console.log(totalalamount)
    return (
        <>
            {/* <button onClick={Addexpenses}>Add Expenses</button> */}
            <button className={styles.customButton}onClick={Addyourexpenses} >Add Expenses</button>
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
                        {items.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>Rs {item.Amount}</td>
                                <td>{item.Amountfor}</td>
                                <td>{item.Place}</td>
                                <td>{item.Date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <h2>Total amount :- {totalalamount}</h2>
                <div>
                <button className={styles.customButton}>Delete all Expenses</button>
            <button className={styles.customButton}onClick={Addyourmoney}>Add Money</button>
                </div>
            </div>
        </>
    );
};

export default Showexpenses;
