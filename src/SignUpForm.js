import React, { Component } from 'react'

export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    isStudent: false,
    isAbroad: false,
    country: '',
    isActive: false,
  }

  handleInput = e => {
    const { type, name, value } = e.target;
    if (type === 'radio' || type === 'checkbox') {
      this.setState({ [name]: value === 'true' });
    } else {
      this.setState({ [name]: value });
    }
  }

  handleCheckbox = e => {
    const { name } = e.target;
    this.setState(state => ({ [name]: !state[name] }))
  }

  handleSubmit = e => {
    e.preventDefault();
    window.localStorage.user = JSON.stringify(this.state)
  }

  componentWillUnmount() {
    console.log('Unmonting');
    alert('Hayer')
  }

  render() {
    const { email, name, password, isStudent, isAbroad, country, isActive } = this.state;
    return (
      <div>
        {/* <button onClick={() => this.setState({ isLoggedIn: false })}>Logout</button> */}
        <form action="" onSubmit={this.handleSubmit}>
          <p>
            <label htmlFor="">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleInput}
            />
          </p>
          <p>
            <label htmlFor="">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleInput}
            />
          </p>
          <p>
            <label htmlFor="">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleInput}
            />
          </p>
          <p>
            <label htmlFor="">Are you student?</label>
            <input
              type="radio"
              name="isStudent"
              value={'true'}
              checked={isStudent}
              onChange={this.handleInput}
            />
              Yes
              <input
              type="radio"
              name="isStudent"
              value={'false'}
              checked={!isStudent}
              onChange={this.handleInput}
            />
              No
            </p>
          {
            isStudent ?
              <>
                <p>
                  <label htmlFor="">Name of your university</label>
                  <input
                    type="text"
                    name="unversity"
                    placeholder="University name"
                    onChange={this.handleInput}
                  />
                </p>
                <div>
                  <input
                    type="checkbox"
                    name="isAbroad"
                    checked={isAbroad}
                    onChange={this.handleCheckbox}
                  />
                </div>
              </>
              :
              null
          }
          {
            isAbroad ?
              <select name="country" value={country} onChange={this.handleInput}>
                <option value="USA">USA</option>
                <option value="Russia">RUSSIA</option>
                <option value="England">England</option>
                <option value="Japan">Japan</option>
              </select>
              :
              null
          }
          {/* Show  Regions of selected country */}
          <button
            type="button"
            name="isActive"
            onClick={this.handleCheckbox}
            className={`reset-btn ${isActive ? 'active' : ''}`}
          >
            Dont submit
            </button>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
