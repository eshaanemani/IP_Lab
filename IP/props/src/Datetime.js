import React from 'react';

function Datetime(props) {

  return (
    <div>
      <h1>Date and time are :</h1>
      <p>{props.formattedDate}</p>
      <p>{props.currentTime}</p>
    </div>
  );
}

export default Datetime;
