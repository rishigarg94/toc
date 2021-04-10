import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import RequestPremium from './RequestPremium.js';
import Pharmacy from './Pharmacy.js';
import ProductPage from './ProductPage.js';
import '../styles/blockchain/index.css';
import { Accordion, Button, Card } from 'react-bootstrap';
import { BigTranscript, BigTranscriptContainer, ErrorPanel, PushToTalkButton, PushToTalkButtonContainer } from '@speechly/react-ui'
import { SpeechProvider, useSpeechContext } from '@speechly/react-client'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'


const Dashboard = () => {
    const history = useHistory()
    const { toggleRecording, speechState, segment } = useSpeechContext()
    const [fname, setFname] = useState(JSON.parse(localStorage.getItem('user'))?.fname || '')
    const [lname, setLname] = useState(JSON.parse(localStorage.getItem('user'))?.lname || '')
    const [email, setEmail] = useState(JSON.parse(localStorage.getItem('user'))?.email || '')

    useEffect(() => {
        console.log(segment)
    }, [segment])
    useEffect(() => {
        setFname(JSON.parse(localStorage.getItem('user'))?.fname || '')
        setLname(JSON.parse(localStorage.getItem('user'))?.lname || '')
        setEmail(JSON.parse(localStorage.getItem('user'))?.email || '')
    }, [fname])


    useEffect(() => {
        if (segment) {
            if (segment.isFinal) segment.words = []
        }
    }, [segment])

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
                                    <li><Link to='/dashboard/patient/details'>Details</Link></li>
                                    {/* <li><Link to='/dashboard/patient/payments'>Payments</Link></li> */}
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
                        {
                            JSON.parse(localStorage.getItem('user'))?.isPremiumed &&
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                        <i class="fa fa-star mr-3"></i> <a style={{ textDecoration: 'none', color: 'white' }} href='/blockchain'>Premium </a>
                                    </Accordion.Toggle>
                                </Card.Header>
                            </Card>
                        }
                        <Card className='my-5'>
                            <Card.Body>
                                <p style={{ fontSize: 'x-small' }}>{segment && segment.words.map(w => w.value).join(' ')}</p>
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
                            <Route path='/dashboard/patient/details'>
                                <div className="jumbotron">
                                    <h1>{fname} {lname} </h1>
                                    <p>
                                        <h3>EMAIL: {email}</h3>
                                    </p>
                                    <button className="btn btn-primary" onClick={e => {
                                        localStorage.removeItem('user')
                                        localStorage.removeItem('token')
                                        history.push('/')
                                        toast.success('Logged Out successful')
                                        window.location.reload()
                                    }}>Logout</button>
                                </div>
                            </Route>
                            <Route>
                                <div className="jumbotron">
                                    <h1>Welcome to User Dashboard Page</h1>
                                </div>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
            <BigTranscriptContainer>
                <BigTranscript />
            </BigTranscriptContainer>
            <PushToTalkButtonContainer >
                <PushToTalkButton captureKey=" " />
                <ErrorPanel />
            </PushToTalkButtonContainer>
            {/* <SpeechlyApp /> */}
            {/* </SpeechProvider> */}
        </Router>
    )
}

export default Dashboard;