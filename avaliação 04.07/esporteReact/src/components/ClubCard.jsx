import React from 'react';
import '../App.css';

const ClubCard = ({ club }) => {
  return (
    <div className="escudo">
      <img src={club.escudos['60x60']} alt={club.nome} className="image" />
      <div className="info">
        <h2 className="nome">{club.nome}</h2>
        <p className="=nickname">{club.apelido}</p>
      </div>
    </div>
  );
};

export default ClubCard;
