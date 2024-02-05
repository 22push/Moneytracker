import React, { useState, useRef } from 'react';
import styles from './createteam.module.css';
import axios from 'axios';
const CreateTeam = () => {
    const userid = localStorage.getItem('userid');
    const teamname = useRef();
    const description = useRef();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formdata = {
            teamname: teamname.current.value,
            discription: description.current.value,
        }
        const body = {
            teamname: formdata.teamname,
            discription: formdata.discription,
            createdby: userid
        }
        const option = {
            headers: {
                "student-signup": "application/json",
            }
        }
        try {
            const response = await axios.post('http://localhost:8000/team', body)
            if (response.status === 200) {
                console.log('Form submitted:', response);
                teamname.current.value = '';
                description.current.value = '';
            }
        }
        catch (err) {
            console.log(err)
        }


    };

    return (
        <div className={styles.formContainer}>
            <h2 className={styles.heading}>Create a new Team</h2>
            <form>
                <label>
                    Enter your Team name
                    <input
                        type="text"
                        ref={teamname}
                    />
                </label>
                <label>
                    Description
                    <input
                        type="text"
                        ref={description}
                    />
                </label>
                <button type="submit" className={styles.submitButton}  onClick={handleSubmit}>
                    Create a new team
                </button>
            </form>
        </div>
    );
};

export default CreateTeam;
