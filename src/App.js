import React, { Fragment } from 'react';
import Home from './Home';
import Users from './Users';
import './index.css';

export default function App() {
  // throw Error('Hahha')
  return (
    <>
      <Home title="Home page suckers!" />
      <Users />
    </>
  )
};

