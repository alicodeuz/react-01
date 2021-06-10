import React from 'react';

const SignIn = (props) => {
  console.log(props)
  return (
    <div>
      <input type="email" name="email" />
      <button onClick={props.login}>Login</button>
    </div>
  );
}

export default SignIn;
