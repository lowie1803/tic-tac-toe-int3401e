import React from 'react';

function NameCard(props) {
  const { name, score, avatar, timeLeft } = props;

  return (
    <div className="namecard">
      <div className="name">{name}</div>
      <div className="score">Score: {score}</div>
      <div className="avatar">
        <img src={avatar} alt={name} />
      </div>
      <div className="time-left">Time Left: {timeLeft}</div>
    </div>
  );
}

export default NameCard;
