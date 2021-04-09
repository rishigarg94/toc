import React from 'react';

const HomePage = () => (
    <div className="home__body">
        <div className="row">
            <div className="col-md-4">
                <span className="home__subtitle">LATEST UPDATES</span>
                <div className="line__1"></div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4">
                <div className="box__1"></div>
                <div className="ulp__1"></div>
                <span className="ult__1">COVID-19) advice for the public - WHO</span>
            </div>
            <div className="col-md-4">
                <div className="box__1"></div>
                <div className="ulp__2"></div>
                <span className="ult__2">Bengaluru sees spurt in U-10 children testing Covid +ve</span>
            </div>
            <div className="col-md-4">
                <div className="box__1"></div>
                <div className="ulp__3"></div>
                <span className="ult__3">Why second Covid-19 wave could be much worse than the first</span>
            </div>
        </div>
    </div>
);

export default HomePage;