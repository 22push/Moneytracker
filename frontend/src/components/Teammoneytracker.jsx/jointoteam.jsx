import React, { useState, useRef } from 'react';
import styles from './createteam.module.css'; 
import axios from 'axios';

const JoinTeam = () => {
    const userid = localStorage.getItem('userid');
    const teamidRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const teamid = teamidRef.current.value; // Use a different variable name to avoid shadowing

        const options = {
            headers: {
                "student-signup": "application/json",
            }
        }

        try {
            console.log(`http://localhost:8000/${teamid}/${userid}`)
            const response = await axios.post(`http://localhost:8000/team/${teamid}/${userid}`, null, options);
            if (response.status === 200) {
                console.log('Form submitted:', response);
                teamidRef.current.value = '';
            }
        }
        catch (err) {
            console.log(err);
        }
    };

    return (
        <div className={styles.formContainer}>
            <h2 className={styles.heading}>Join to team</h2>
            <form>
                <label>
                    Enter team id
                    <input
                        type="Number"
                        ref={teamidRef}
                    />
                </label>
                <button type="submit" className={styles.submitButton} onClick={handleSubmit}>
                    Join team
                </button>
            </form>
        </div>
    );
};

export default JoinTeam;
