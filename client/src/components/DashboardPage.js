import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import RequestPremium from './RequestPremium.js';
import Pharmacy from './Pharmacy.js';
import Product from './Product.js';
import '../styles/blockchain/index.css';

const Dashboard = () => (
    <Router>
        <div className="container-fluid">
            <div className="sidebar-container">
                <ul className="sidebar-navigation">
                    <li className="header">User Dashboard</li>
                    <li className="panel panel-default" id="dropdown-1" onClick={e => {
                        const dropdown = document.getElementById('dropdown-patient')
                        if (dropdown.classList.contains('show')) dropdown.classList.remove('show')
                        else dropdown.classList.add('show')
                        document.getElementById('dropdown-1').style.backgroundColor = ''
                    }}>
                        <a data-toggle="collapse">
                            <i className="fa fa-user"></i> Patient
                        </a>
                        <div id="dropdown-patient" className="panel-collapse collapse">
                            <div className="panel-body">
                                <ul className="nav navbar-nav">
                                    <li><a href='/dashboard/patient/details'>Details</a></li>
                                    <li><a href='/dashboard/patient/payments'>Payments</a></li>
                                    <li><NavLink to='/dashboard/patient/request'>Request to become Premium User</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className="panel panel-default" id="dropdown-2" onClick={e => {
                        const dropdown = document.getElementById('dropdown-doctor')
                        if (dropdown.classList.contains('show')) dropdown.classList.remove('show')
                        else dropdown.classList.add('show')
                    }}>
                        <a data-toggle="collapse" href="#">
                            <i className="fas fa-user-md"></i> Doctors
                        </a>
                    </li>
                    <li className="panel panel-default" id="dropdown-3">
                        <NavLink to="/dashboard/pharmacy">
                            <i className="fas fa-notes-medical"></i> Pharmacy
                        </NavLink>
                    </li>
                    <li className="panel panel-default" id="dropdown-1">
                        <NavLink to='/blockchain'>
                            <i className="fa fa-hospital"></i>Blockchain
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="content-container">
                <div className="container-fluid">
                    <Switch>
                        <Route path='/dashboard/pharmacy/:id' component={Product} />
                        <Route path='/dashboard/pharmacy' component={Pharmacy} exact />
                        <Route path='/dashboard/patient/request' component={RequestPremium} />
                        <Route>
                            <div className="jumbotron">
                                <h1>Navbar example</h1>
                                <p>This example is a quick exercise to illustrate how the default, static and fixed to top navbar work. It includes the responsive CSS and HTML, so it also adapts to your viewport and device.</p>
                                <p>To see the difference between static and fixed top navbars, just scroll.</p>
                                <p>
                                    <a className="btn btn-lg btn-primary" href="../../components/#navbar" role="button">View navbar docs &raquo;</a>
                                </p>
                            </div>
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    </Router>
);

export default Dashboard;