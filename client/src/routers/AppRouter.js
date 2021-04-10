import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import DashboardPage from '../components/DashboardPage';
import LoginRegisterPage from '../components/LoginRegisterPage';
import NotFoundPage from '../components/NotFoundPage';
import Dashboard from '../components/blockchain/Dashboard';
import { ToastContainer } from 'react-toastify';


const AppRouter = () => (
    <BrowserRouter>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
        <Switch>
            <Route path='/blockchain' >
                <Dashboard />
            </Route>
            <Route>
                <Header />
                <Switch>
                    {/* <Route path='/blockchain' component={Dashboard} exact /> */}
                    <Route path="/" component={HomePage} exact />
                    <Route path="/sign" component={LoginRegisterPage} exact />
                    <Route path="/dashboard" component={DashboardPage} exact />
                    <Route component={NotFoundPage} />
                </Switch>
            </Route>
        </Switch>
    </BrowserRouter>
);

export default AppRouter;