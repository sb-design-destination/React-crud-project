import React from 'react';
import MainHeader from './common/header';

const HomePage = () => {
    return (
        <>  
            <MainHeader/>
            <div className="container">
                <div className="row">
                    <div className="col">
                        Welcome to My Website.
                    </div>
                </div>
            </div>   
        </>
    );
};

export default HomePage;