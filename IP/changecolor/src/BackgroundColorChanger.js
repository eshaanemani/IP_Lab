import React, { Component } from 'react';

class BackgroundColorChanger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputBackgroundColor: 'white'
    };
  }

  changeInputBackgroundColor = () => {
    const colors = ['red', 'green', 'blue', 'orange', 'purple', 'yellow'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    this.setState({
      inputBackgroundColor: randomColor
    });
  }

  render() {
    const { inputBackgroundColor } = this.state;

    return (
      <div>
        <h1>Input Background Color Changer</h1>
        <input
          type="text"
          placeholder="Type something"
          style={{ backgroundColor: inputBackgroundColor, color: 'white' }}
        />
        <button onClick={this.changeInputBackgroundColor}>Change Input Background Color</button>
      </div>
    );
  }
}

export default BackgroundColorChanger;
