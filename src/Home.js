import React, { Component } from 'react';
import SignUpForm from './SignUpForm';
import SignIn from './SignIn';

class Home extends Component {
  state = {
    isLoggedIn: false,
  }

  render() {
    const { isLoggedIn } = this.state;

    if (isLoggedIn) {
      return (
        <div>
          <button onClick={() => this.setState({ isLoggedIn: false })}>Logout</button>
          <SignUpForm />
        </div>
      );
    } else {
      return (
        <SignIn
          isLoggedIn={isLoggedIn}
          login={() => this.setState({ isLoggedIn: true })}
        />
      )
    }
  }
}

export default Home;
