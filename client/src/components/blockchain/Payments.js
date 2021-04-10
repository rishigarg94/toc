import React, { useRef, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { hack, web3 } from './Config'

export default function Payments({ account }) {

    const accRef = useRef()
    const amountRef = useRef()
    const [show, setShow] = useState(false)

    const handleSend = () => {
        setShow(true)
    }

    
    const send_payment = async (reciever_hash,amount,sender_hash) => {
        let msg = await hack.methods.payment(reciever_hash,amount).send({
            from: sender_hash,
            gas: 1000000
        });

        console.log("message is ", msg.code);

        let msg_code=await hack.methods.patient_last_transaction().call((err,res) =>{
            if (err) console.log("error in doxcot" ,err)
            else {
                console.log("result in doctor" ,res);
                
            }
        })
        console.log(msg_code);
    }
    const handleConfirm = () => {
        const reciever_hash =accRef.current.value;
        const amount_sending=amountRef.current.value;
        const sender_hash=account;
        
        send_payment(reciever_hash,amount_sending,sender_hash);
        setShow(false)
        accRef.current.value = ''
        amountRef.current.value = ''
    }
    const handleCancel = () => {
        setShow(false)
    }

    return (
        <div>
            <Modal show={show} >
                <Modal.Header >
                    <Modal.Title className='mx-auto'>Are you sure ?</Modal.Title>
                </Modal.Header>
                <Modal.Body>Please check your details properly before transaction !</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleConfirm}>
                        Confirm
          </Button>
                    <Button variant="secondary" onClick={handleCancel}>
                        Cancel
          </Button>
                </Modal.Footer>
            </Modal>
            <div className="container my-5">
                <div className="mb-3 row">
                    <label htmlFor="name" className="col-sm-3 col-form-label font-weight-bold">
                        Your Account Hash :{" "}
                    </label>
                    <div className="col-sm-9">
                        <input
                            value={account}
                            type="text"
                            className="form-control"
                            id="name"
                            disabled
                        />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="regis" className="col-sm-3 col-form-label font-weight-bold">
                        Enter Receiver's Account Hash:{" "}
                    </label>
                    <div className="col-sm-9">
                        <input
                            ref={accRef}
                            type="text"
                            className="form-control"
                            id="regis"
                        />
                    </div>
                </div>
                <div className="my-3 row">
                    <label htmlFor="regis" className="col-sm-3 col-form-label font-weight-bold">
                        Enter the Amount:{" "}
                    </label>
                    <div className="col-sm-9">
                        <input
                            ref={amountRef}
                            type="number"
                            className="form-control"
                            id="regis"
                        />
                    </div>
                </div>
                <br />
                <br />
                <div className="d-flex justify-content-center align-items-center">
                    <Button size="lg" onClick={handleSend} variant="primary">
                        Send
                    </Button>
                </div>
            </div>

        </div>
    )
}
