import React from "react";


function Home() {
  return (
    <>
      <div className='jumbotron text-center'>
        <h1>Welcome to Transflower Learning Pvt. Ltd.</h1>
        <p>Mentor as a service</p>
        <p>React js learning is fun</p>
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-sm-4'>
            <p>Flowers</p>
            <p>Celebrate every moment with flowers</p>
          </div>

          <div className='col-sm-4'>
            <p>Gifts</p>
            <p>Find the perfect gift for every occasion</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;