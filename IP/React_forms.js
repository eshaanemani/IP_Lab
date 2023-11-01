import React, { Component } from 'react';

class FormWithValidation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      errors: {
        name: '',
        email: '',
        password: '',
      },
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  validateForm = () => {
    const { name, email, password } = this.state;
    const errors = {
      name: '',
      email: '',
      password: '',
    };

    let isValid = true;

    if (!name) {
      errors.name = 'Name is required';
      isValid = false;
    }

    if (!email) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Invalid email address';
      isValid = false;
    }

    if (!password) {
      errors.password = 'Password is required';
      isValid = false;
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    this.setState({ errors });
    return isValid;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validateForm();

    if (isValid) {
      // Submit the form data or perform an action
      console.log('Form submitted with data:', this.state);
    }
  };

  render() {
    const { name, email, password, errors } = this.state;

    return (
      <div>
        <h1>Form with Validation</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleInputChange}
            />
            <span className="error">{errors.name}</span>
          </div>
          <div>
            <label>Email:</label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={this.handleInputChange}
            />
            <span className="error">{errors.email}</span>
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleInputChange}
            />
            <span className="error">{errors.password}</span>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default FormWithValidation;
