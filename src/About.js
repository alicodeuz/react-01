import React from 'react';
import UniversalComponent from './UniversalComponent';
import logo from './logo.png';

const About = (props) => {
  console.log(props)
  return (
    <section>
      <h2>{props.title}</h2>
      <h3>{props.subTitle}</h3>
      <UniversalComponent title="hjey">
        <button>AAAAA</button>
        <img src={logo} alt="" />
        <button>AAAAA</button>
      </UniversalComponent>
    </section>
  );
}

export default About;
