import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

function Signin() {
  const { token } = useSelector(state => state.auth);
  if (token !== null) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <section>signin</section>
    </>
  );
}

export default Signin;
