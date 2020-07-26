import React from 'react';
import './style.scss';

const TimeBox = ({ number, text, isEnd }) => {

  return (
    <div className={`time ${!isEnd ? 'mr-3' : ''}`}>
      <div className="time-box">{number}</div>
      <div className="text">{text}</div>
    </div>
  );
}

export default TimeBox;
