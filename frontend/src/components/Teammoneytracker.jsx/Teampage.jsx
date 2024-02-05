// CardList.jsx

import React from 'react';
import styles from './CardStyles.module.css';

const Teampage1 = () => {
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
    <button className={styles.customButton}>Create a new team</button>
    <button className={styles.customButton}>Add to team</button>
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
