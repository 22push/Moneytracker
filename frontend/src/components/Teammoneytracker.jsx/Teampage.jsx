import React from 'react';
import styles from './CardStyles.module.css';
import CreateTeam from './createteam'
import { useState } from 'react';
import JoinTeam from './jointoteam'
const Teampage1 = () => {
  const [createteam , setcreateteam] = useState(false);
  const [jointoteam , setjointoteam] = useState(false);
  const ChangecreateTeam = () => {
    if(jointoteam){
      setjointoteam(false);
    }
    if(createteam){
      setcreateteam(false);
    }
    else{
      setcreateteam(true);
    }
  }
  const ChangejoinTeam = () => {
    if(createteam){
      setcreateteam(false);
    }
    if(jointoteam){
      setjointoteam(false);
    }
    else{
      setjointoteam(true);
    }
  }
  const cards = [
    {
      teamname: 'Team A',
      createdby: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      members:10,
    },
    {
        teamname: 'Team A',
        createdby: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        members:10,
      },
      {
        teamname: 'Team A',
        createdby: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        members:10,
      },
      {
        teamname: 'Team A',
        createdby: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        members:10,
      },
      {
        teamname: 'Team A',
        createdby: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        members:10,
      },
      {
        teamname: 'Team A',
        createdby: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        members:10,
      },
  ];

  return (
    <>
    <button className={styles.customButton} onClick={ChangecreateTeam}>Create a new team</button>
    <button className={styles.customButton} onClick={ChangejoinTeam}>Add to team</button>
    {createteam?<CreateTeam/>:""}
    {jointoteam?<JoinTeam/>:""}
    <h2 className={styles.heading}>Your Teams</h2>
    <div className={styles.cardContainer}>
      {cards.map((card, index) => (
        <div key={index} className={styles.card}>
          <h2 className={styles.cardTitle}>{card.teamname}</h2>
          <p className={styles.cardContent}>{card.createdby}</p>
          <h3>{card.members}</h3>
        </div>
      ))}
    </div>
    </>
  );
};

export default Teampage1;
