import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import RequestPremium from './RequestPremium.js';
import Pharmacy from './Pharmacy.js';
import ProductPage from './ProductPage.js';
import '../styles/blockchain/index.css';
import { Accordion, Button, Card } from 'react-bootstrap';
import { BigTranscript, BigTranscriptContainer, ErrorPanel, PushToTalkButton, PushToTalkButtonContainer } from '@speechly/react-ui'
import { SpeechProvider, useSpeechContext } from '@speechly/react-client'


const Dashboard = () => {
    const { segment } = useSpeechContext()

    return (
        <Router>
            <div className="container-fluid">
                <div class="sidebar-container">
                    <Accordion className='sidebar-navigation'>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    <i class="fa fa-user mr-3"></i> Patient
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body><ul class="nav navbar-nav">
                                    {/* <li><Link to='/dashboard/patient/details'>Details</Link></li> */}
                                    <li><Link to='/dashboard/patient/payments'>Payments</Link></li>
                                    <li><Link to='/dashboard/patient/request'>Request to become Premium User</Link></li>
                                </ul></Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        {/* <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                <i class="fa fa-user-md mr-3"></i> Doctor
                                </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <li><Link to='/blockchain/doctor/search-patient'>Search Patient</Link></li>
                                <li><Link to='/blockchain/doctor/give-prescription'>Give Pescription</Link></li>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card> */}
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                    <i className="fa fa-hospital mr-3"></i> <Link style={{ textDecoration: 'none', color: 'white' }} to='/dashboard/pharmacy'>Pharmacy</Link>
                                </Accordion.Toggle>
                            </Card.Header>
                        </Card>
                        <Card>
                            <Card.Body>
                                <p style={{ fontSize: 'small' }}>
                                    {segment && segment.words.map(w => w.value).join(" ")}
                                </p>
                            </Card.Body>
                        </Card>
                    </Accordion>
                </div>


                <div className="content-container">
                    <div className="container-fluid">
                        <Switch>
                            <Route path='/dashboard/pharmacy/:id' component={ProductPage} exact />
                            <Route path='/dashboard/pharmacy' component={Pharmacy} exact />
                            <Route path='/dashboard/patient/request' component={RequestPremium} exact />
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
            <SpeechProvider appId="37bec763-28ae-4576-9d4f-8f234bfcfa61" language="en-US">
                <BigTranscriptContainer>
                    <BigTranscript />
                </BigTranscriptContainer>

                <PushToTalkButtonContainer>
                    <PushToTalkButton captureKey=" " />
                    <ErrorPanel />
                </PushToTalkButtonContainer>
            </SpeechProvider>
        </Router>
    )
}

export default Dashboard;