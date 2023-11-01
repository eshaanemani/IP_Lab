import React, { useState } from 'react';

function App() {
  // Initialize state variables for the two text boxes
  const [textBox1Value, setTextBox1Value] = useState('Default Name 1');

  // Event handlers to update the state when text is changed
  const handleTextBox1Change = (event) => {
    setTextBox1Value(event.target.value);
  };


  return (
    <div>
      <div>
        <input
          type="text"
          value={textBox1Value}
          onChange={handleTextBox1Change}
        />
        <p>{textBox1Value}</p>
      </div>
    </div>
  );
}

export default App;
