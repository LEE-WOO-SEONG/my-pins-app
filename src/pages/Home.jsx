import React from 'react';
import Outline from '../components/Outline';
import useAuth from '../hooks/useAuth';

function Home() {
  useAuth();

  return (
    <>
      <Outline />
      <section className="main">Home</section>
    </>
  );
}

export default Home;
