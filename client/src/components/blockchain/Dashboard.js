import React, { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router'
import '../../styles/blockchain/index.css'
import Details from './Details'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Button, Accordion, Card } from 'react-bootstrap'
import SearchDoctor from './SearchDoctor'
import Payments from './Payments'
import { portis, web3, hack } from './Config'
import SearchPatient from './SearchPatient'
import GivePrescription from './GivePrescription'
import SeePrescription from './SeePrescription'
import SeePrescription2 from './SeePrescription2'
import AddDoctor from './Admin/AddDoctor'
import AddPatient from './Admin/AddPatient'
import AddPharma from './Admin/AddPharma'
import AddPathlab from './Admin/AddPathlab'

const Dashboard = () => {

    const [account, setAccount] = useState("")
    const [role, setRole] = useState("")

    // useEffect(async() => {
    //     portis.onLogin(async(curent_account_address) => {
    //         //const accounts =  web3.eth.getAccounts();
    //         setAccount(curent_account_address);
    //         console.log(curent_account_address);

    //             // await hack.methods.role_define().call((err, res) => {
    //             //     if (err) console.log(err)
    //             //     else {
    //             //         setRole(res.role_id);
    //             //         console.log("role is" ,res);
    //             //     }
    //             // })
    //     });
    //     portis.onActiveWalletChanged(async(acc) => {
    //         //const accounts =  web3.eth.getAccounts();
    //         setAccount(acc);
    //         console.log(acc);
            
    //         //   await  hack.methods.role_define().call((err, res) => {
    //         //         if (err) console.log(err)
    //         //         else {
    //         //             setRole(res.role_id);
    //         //             console.log("role is" ,res);
    //         //         }
    //         //     })
    //     });

    //     // return () => {
    //     //     // portis.on
    //     // }
    // }, [])

    const connectToPortis = async() => {
        // portis.showPortis()
        let accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);
        // await hack.methods.role_define().call((err, res) => {
        //     if (err) console.log(err)
        //     else {
        //         setRole(res);
        //         console.log("role is" ,res);
        //     }
        // })
    }

    const handleLogout = async () => {
        // portis.logout()
        let accounts = await web3.eth.getAccounts();
        setAccount(accounts[4])
        // console.log("recent account is ",account);

        // await hack.methods.get_msg_sender().call((err,res) =>{
        //     if(err) console.log("msg sender error",err);
        //     else{
        //         console.log("msg sender result is ",res);
        //     }
        // })
        //fillfun()
    }

    // const fillfun = async () => {
    //     let msg = await hack.methods.add_patient(account, 'rishigarg', '090401', 'none', 'b+', 98, '9999', '7777', 0, 1).send({
    //         from: account,
    //         gas: 1000000
    //     });

    //     console.log("message is ", msg);

    //     let msg2 = await hack.methods.add_doctor(account, 'rishi doctor', 'gynecologist', '7081259609', 'hospital', 988, 1).send({
    //         from: account,
    //         gas: 1000000
    //     });
    //     console.log("message two is ", msg2);


    //     let msg3 = await hack.methods.add_pharmacy(account, 'rishi pharma', 'pharmacy ka address', '7081259609', 976, 1).send({
    //         from: account,
    //         gas: 1000000
    //     });
    //     console.log("message three is ", msg3);
        
    //     let msg4 = await hack.methods.add_path(account, 'rishi pathology', 'pathology ka address', '7081259609', 487,1).send({
    //         from: account,
    //         gas: 1000000
    //     });
    //     console.log("message four is ", msg4);
    // }

    return (
        <div> 
            <Navbar
                sticky="top"
                collapseOnSelect
                expand="lg"
                variant="dark"
                bg='dark'
                className="style top-bottom"
                id="navbar"
            >
                <Navbar.Brand href="/" className="title-nav">
                    E-Administration
                    </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link eventKey="blogs" hresname="nav-items" href="/blogs">
                            Home
                            </Nav.Link>
                        <Nav.Link eventKey="sponsors" href="/sponsors" className="nav-items">
                            Sponsors
                            </Nav.Link>
                    </Nav>
                    {
                        account ?
                            <Button className='mr-sm-2 my-2 right-btn btn-danger' size='lg' onClick={handleLogout}>Logout</Button>
                            :
                            <Button className='mr-sm-2 my-2 right-btn btn-danger' size='lg' onClick={connectToPortis}>Portis</Button>
                    }
                </Navbar.Collapse>
            </Navbar>
            <div className="container-fluid">
                <div class="sidebar-container">
                    <Accordion className='sidebar-navigation'>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} disabled={account.length === 0} variant="link" eventKey="0">
                                    <i class="fa fa-user mr-3"></i> Patient
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body><ul class="nav navbar-nav">
                                    <li><Link to='/blockchain/patient/details'>Details</Link></li>
                                    <li><Link to='/blockchain/patient/search-doctor'>Search Doctor</Link></li>
                                    <li><Link to='/blockchain/patient/payments'>Payments</Link></li>
                                </ul></Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} disabled={account.length === 0} variant="link" eventKey="1">
                                    <i class="fa fa-user-md mr-3"></i> Doctor
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    <li><Link to='/blockchain/doctor/search-patient'>Search Patient</Link></li>
                                    <li><Link to='/blockchain/doctor/give-prescription'>Give Pescription</Link></li>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} disabled={account.length === 0} variant="link" eventKey="2">
                                    <i class="fa fa-hospital mr-3"></i> Pharmacy
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="2">
                                <Card.Body>
                                    <li><Link to='/blockchain/pharmacy/see-prescription'>See Prescription</Link></li>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} disabled={account.length === 0} variant="link" eventKey="3">
                                    <i class="fa fa-flask mr-3"></i>PathLab
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="3">
                                <Card.Body>
                                    <li><Link to='/blockchain/pathlab/see-prescription'>See Prescription</Link></li>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} disabled={account.length === 0} variant="link" eventKey="4">
                                    <i class="fa fa-lock mr-3"></i>Admin
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="4">
                                <Card.Body>
                                    <li><Link to='/blockchain/admin/add-patient'>Add Patient</Link></li>
                                    <li><Link to='/blockchain/admin/add-doctor'>Add Doctor</Link></li>
                                    <li><Link to='/blockchain/admin/add-pharmacy'>Add Pharmacy</Link></li>
                                    <li><Link to='/blockchain/admin/add-pathlab'>Add PathLab</Link></li>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </div>

                <div class="content-container">
                    <div class="container-fluid">
                        <Switch>
                            <Route path='/blockchain/patient/details' exact>
                                <Details account={account} />
                            </Route>
                            <Route path='/blockchain/patient/search-doctor' exact>
                                <SearchDoctor account={account} />
                            </Route>
                            <Route path='/blockchain/patient/payments' exact>
                                <Payments account={account} />
                            </Route>
                            <Route path='/blockchain/doctor/search-patient' exact>
                                <SearchPatient account={account} />
                            </Route>
                            <Route path='/blockchain/doctor/give-prescription' exact>
                                <GivePrescription account={account} />
                            </Route>
                            <Route path='/blockchain/pharmacy/see-prescription' exact>
                                <SeePrescription account={account} />
                            </Route>
                            <Route path='/blockchain/pathlab/see-prescription' exact>
                                <SeePrescription2 account={account} />
                            </Route>
                            <Route path='/blockchain/admin/add-patient' exact>
                                <AddPatient account={account} />
                            </Route>
                            <Route path='/blockchain/admin/add-doctor' exact>
                                <AddDoctor account={account} />
                            </Route>
                            <Route path='/blockchain/admin/add-pharmacy' exact>
                                <AddPharma account={account} />
                            </Route>
                            <Route path='/blockchain/admin/add-pathlab' exact>
                                <AddPathlab account={account} />
                            </Route>
                            <Route>
                                <div class="jumbotron">
                                    <h1 className='text-center'>{account ? "You are successfully connected to portis!" : 'Please connect to Portis first !'}</h1>
                                </div>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Dashboard
