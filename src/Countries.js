import React, { Component } from 'react';
import usaStates from './states/usa.json';
import usaStateCities from './states/usaStateCities.json';
import russiaStates from './states/russia.json';

const users = [
  'Name',
  'hello',
  'Chumo'
]

class Countries extends Component {
  state = {
    country: '',
    state: '',
    city: null
  }



  handleSelection = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    console.log(this.state);
    const { state, country, city } = this.state;
    return (
      <div>
        <h2>Select country</h2>
        <select name="country" onChange={this.handleSelection} value={country}>
          <option value="">Choose country</option>
          <option value="usa">USA</option>
          <option value="rus">Russia</option>
        </select>
        {
          country === 'usa' ?
            <select name="state" onChange={this.handleSelection} value={state}>
              <option value="">Choose state</option>
              {
                usaStates.map((item, index) => {
                  return (
                    <option key={item.abbreviation} value={item.name}>{item.name}</option>
                  )
                })
              }
            </select>
            :
            null
        }

        {
          (country === 'usa' && state) ?
            <select name="city" onChange={this.handleSelection} value={city}>
              {
                usaStateCities[state].map((item, index) => {
                  return (
                    <option key={item} value={item}>{item}</option>
                  )
                })
              }
            </select>
            :
            null
        }
        {/* <select name="city" onChange={this.handleSelection} value={this.state.city}>
          <option value="usa">USA</option>
          <option value="rus">Russia</option>
        </select> */}

      </div>
    );
  }
}

export default Countries;
