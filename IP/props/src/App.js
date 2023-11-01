import './App.css';
import React from 'react';
import Datetime from './Datetime';

function App() {
  const currentDate = new Date();
  const formattedDate = currentDate.toDateString();
  const currentTime = currentDate.toLocaleTimeString();
  return (
    
    <div>
      <Datetime formattedDate = {formattedDate} currentTime = {currentTime} />
      {/* <Datetime  /> */}
    </div>
  );
}

export default App;

