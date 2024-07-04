import React, { useState, useEffect } from 'react';
import ClubCard from './ClubCard';
import '../App.css';

const ClubList = () => {
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    fetch('https://api.cartola.globo.com/clubes')
      .then(response => response.json())
      .then(data => {
        const clubsArray = Object.values(data);
        setClubs(clubsArray);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="lista">
      {clubs.map(club => (
        <ClubCard key={club.id} club={club} />
      ))}
    </div>
  );
};

export default ClubList;
