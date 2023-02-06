import React from 'react';
import MainHeader from './mainheader';

const Home = () => {
    return (
        <>
          <MainHeader/>  
          <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className='    mt-5'>Welcome to HomePage..!</h1>
                </div>
            </div>
          </div>
        </>
    );
};

export default Home;