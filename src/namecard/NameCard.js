import React from 'react';
import CountdownTimer from './CountdownTimer';

function NameCard(props) {
  const { name, score, avatar, timeLeft, isRunning } = props;


  return (
    <div className="namecard">
      <div className="name">{name}</div>
      <div className="score">Score: {score}</div>
      <div className="avatar">
        <img src={avatar} alt={name} />
      </div>
      <CountdownTimer time={timeLeft} isRunning={isRunning}/>
    </div>
  );
}

export default NameCard;
