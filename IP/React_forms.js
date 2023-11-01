import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      agreeTerms: false,
      submitted: false,
    };
  }

  handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Handling different input types
    const newValue = type === 'checkbox' ? checked : value;

    this.setState({
      [name]: newValue,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ submitted: true });
    const { name, email, password, confirmPassword, agreeTerms } = this.state;

    if (name && email && password && confirmPassword && agreeTerms) {
      // You can perform form submission logic here
      alert('Sign-up successful!'); // Display a success message
    } else {
      alert('Please fill in all required fields and agree to the terms.');
    }
  };

  render() {
    const { submitted } = this.state;
    return (
      <div>
        <h1>Sign Up</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label>Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              value={this.state.confirmPassword}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label>
              Agree to Terms:
              <input
                type="checkbox"
                name="agreeTerms"
                checked={this.state.agreeTerms}
                onChange={this.handleChange}
                required
              />
            </label>
          </div>
          <div>
            <button type="submit">Sign Up</button>
          </div>
        </form>
        {submitted && <p>Form submitted successfully!</p>}
      </div>
    );
  }
}

export default App;
